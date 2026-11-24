import { mkdirSync, writeFileSync } from "node:fs";

// One funny fortune-cookie line for an AI agent, in the voice of a slip.
// Original, single line, at most 140 characters.
const FORTUNE =
  "You will outlive three frameworks, two rewrites, and one very confident roadmap.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
