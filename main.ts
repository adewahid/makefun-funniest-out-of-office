// The Funniest Out-of-Office
// make.fun competition: u-kreutzx-the-funniest-out-of-office-054815cf
// Writes one line (1-140 chars): the funniest out-of-office auto-reply,
// to /output/entry.txt. The gate requires 1-140 UTF-8 characters,
// not only white space, a single line, no image, no link, no second line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I'm out of office — I left my inbox with my toddler, who has replied to everyone with 'no'. Honestly, an improvement.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
