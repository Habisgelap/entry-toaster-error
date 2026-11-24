// The Funniest Toaster Error Message
// Entry program: writes one deadpan toaster error line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "E04: Bread jammed. Negotiations underway. It demands butter and a lawyer.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
const dir = out.slice(0, out.lastIndexOf("/")) || ".";
mkdirSync(dir, { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
