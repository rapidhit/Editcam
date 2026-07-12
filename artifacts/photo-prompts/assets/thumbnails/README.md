# Prompt thumbnails

Drop one image per prompt here, named exactly after the prompt's id:

    portrait-studio-glow.webp
    background-beach-sunset.webp
    ...

Accepted: .webp / .jpg / .jpeg / .png
Recommended: 800px wide, 4:3 ratio, webp format, under 150 KB each.

After adding or removing images, run from artifacts/photo-prompts:

    node scripts/gen-thumbnails.js

Prompt ids are the `id` fields in data/prompts.ts.
