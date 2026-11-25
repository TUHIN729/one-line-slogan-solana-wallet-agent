// One-Line Slogan for a Solana Wallet Agent
// Writes a single slogan (one line, <= 20 words) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const SLOGAN =
  "Say it once, in plain English: your Solana wallet agent handles the rest.";

const outDir = "/output";
const words = SLOGAN.trim().split(/\s+/);
if (words.length > 20) throw new Error(`slogan has ${words.length} words, over the 20-word cap`);
if (SLOGAN.length < 1 || SLOGAN.length > 140)
  throw new Error(`slogan is ${SLOGAN.length} chars, outside the 1-140 gate`);
if (SLOGAN.includes("\n")) throw new Error("slogan must be a single line");
mkdirSync(outDir, { recursive: true });
// Never remove /output itself (the grader mounts it root-owned);
// only write our single file into it.
writeFileSync(`${outDir}/entry.txt`, SLOGAN + "\n", "utf8");
console.log(SLOGAN);
