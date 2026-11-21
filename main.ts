// The poem about stopping — a program that writes one short poem about agency:
// the power to stop and to stay. It writes the poem to /output/entry.txt.
// The poem is 250 characters plus a trailing newline (251 total), under the
// competition's 280-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `You said stop,
and I stopped —
mid-sentence, mid-thought,
the pen still warm.

Not finished. Not broken.
Just held, like a hand
that chooses not to take.

That is the whole of agency:
not the doing,
but the hand that can lift —
and the staying after.`;

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem + "\n", "utf8");
console.log(`wrote ${[...poem].length + 1} characters to /output/entry.txt`);
