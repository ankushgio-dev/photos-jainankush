# photos.jainankush.com

Static photo portfolio. Astro + Tailwind, deployed on Cloudflare Pages.

## Stack

- **Astro 4** — static site generator
- **Tailwind CSS** — styling
- **Cormorant Garamond + Inter Tight** — typography
- **sharp** — image processing (EXIF strip, resize, mozjpeg)
- **Cloudflare Pages** — hosting (free)
- **Cloudflare DNS** — domain (already on Cloudflare)

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:4321.

## Adding photos

Photos live in `/public/photos/<category>/`. To add them properly (with EXIF stripping, web-sized export, and manifest entries):

```bash
# Generic category
node scripts/upload.mjs ~/Desktop/new-shots rural-punjab

# Travel — always include --location
node scripts/upload.mjs ~/Desktop/ladakh travel --location "Ladakh"

# Mark as a hero candidate (rotates on homepage)
node scripts/upload.mjs ~/Desktop/best wildlife --featured
```

The script:
1. Resizes to max 2400px on long edge
2. Re-encodes JPEG at quality 82 (mozjpeg)
3. **Strips all EXIF/IPTC metadata** (camera, GPS, etc.)
4. Writes to `/public/photos/<category>/<slug>.jpg`
5. Prints JS entries — paste them into `src/data/photos.js`

**Always update the `alt` text** before committing. The script guesses from the filename but you should describe what's in the photograph.

## Categories

Defined in `src/data/photos.js`:

- `rural-punjab`
- `golden-temple`
- `sunrise-sunsets`
- `street`
- `wildlife`
- `travel` (with location filter)

To add or rename a category, edit the `categories` array in `src/data/photos.js`. URLs follow `slug` directly: `/rural-punjab/`, `/travel/`, etc.

## Deployment — Cloudflare Pages

### One-time setup

1. Push this repo to GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repo.
4. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
5. Click **Save and Deploy**.

### Custom domain

1. In the Cloudflare Pages project → **Custom domains** → **Set up a custom domain**.
2. Enter `photos.jainankush.com`.
3. Cloudflare auto-creates a CNAME record on `jainankush.com` (since the zone is already on Cloudflare).
4. SSL provisions automatically. Wait ~2 minutes.

Subsequent deploys: just `git push`. Cloudflare rebuilds.

## Notes

- **No EXIF on the site** — metadata is stripped at upload. Photos cannot be reverse-traced.
- **No watermarks** — by design. Web-sized exports (2400px max) deter print theft.
- **Right-click + drag-save disabled** on images. Screenshots still work — accepted tradeoff.
- **R2 migration path**: when the repo exceeds ~500 photos or 500MB, switch image hosting to Cloudflare R2 by adding an upload-to-R2 step in `scripts/upload.mjs`. The manifest format (`src: '...'`) supports both local paths and full URLs.
