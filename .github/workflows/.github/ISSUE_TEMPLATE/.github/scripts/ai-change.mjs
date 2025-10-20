// .github/scripts/ai-change.mjs
import fs from "fs";
import path from "path";

const repoRoot = process.cwd();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const ISSUE = JSON.parse(process.env.GITHUB_EVENT_PATH ? fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8") : "{}");
const issue = ISSUE?.issue || {};
const promptTitle = issue.title || "AI change";
const promptBody = issue.body || "";

if (!OPENAI_API_KEY) {
  console.error("Missing OPENAI_API_KEY");
  process.exit(1);
}

const systemMsg = `
You are a senior frontend engineer working in a Vite + React (JSX) project.
Return ONLY valid JSON with the shape:
{
  "edits": [
    {"path": "<relative path from repo root>", "action": "upsert", "content": "<full file content>"},
    {"path": "<path>", "action": "delete"}
  ],
  "notes": "<short notes>"
}
Rules:
- Do "upsert" with FULL new file content (not a diff).
- Keep code style minimal; no TypeScript, no extra deps.
- Do not invent directories that don't exist unless asked.
- Never break the Vite build.
`;

const userMsg = `
Goal/Task (title): ${promptTitle}

Details (body):
${promptBody}

Project info:
- Root: Vite + React (JSX)
- Entry pages live in /src/pages/
- Global styles are in /src/styles.css (if you need it)
- Static assets in /public
Return JSON only as specified.
`;

async function askOpenAI(system, user) {
  const res = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      input: [
        { role: "system", content: system },
        { role: "user", content: user }
      ],
      temperature: 0.2
    })
  });

  if (!res.ok) {
    const t = await res.text();
    throw new Error(`OpenAI error: ${res.status} ${t}`);
  }
  const data = await res.json();
  const text =
    data?.output_text ||
    data?.choices?.[0]?.message?.content?.[0]?.text ||
    data?.choices?.[0]?.message?.content ||
    "";
  return text;
}

function ensureDirFor(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function applyEdits(json) {
  if (!json || !Array.isArray(json.edits)) {
    throw new Error("AI reply missing 'edits' array");
  }
  json.edits.forEach(edit => {
    const target = path.join(repoRoot, edit.path);
    if (edit.action === "delete") {
      if (fs.existsSync(target)) fs.unlinkSync(target);
      console.log(`Deleted: ${edit.path}`);
    } else {
      ensureDirFor(target);
      fs.writeFileSync(target, edit.content ?? "", "utf8");
      console.log(`Upserted: ${edit.path}`);
    }
  });
  if (json.notes) {
    fs.writeFileSync(path.join(repoRoot, ".github", "scripts", "ai-notes.txt"), json.notes, "utf8");
  }
}

(async () => {
  try {
    const raw = await askOpenAI(systemMsg, userMsg);
    const start = raw.indexOf("{");
    const end = raw.lastIndexOf("}");
    const jsonStr = start >= 0 && end >= 0 ? raw.slice(start, end + 1) : raw;
    const parsed = JSON.parse(jsonStr);
    applyEdits(parsed);
    console.log("AI edits applied.");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
