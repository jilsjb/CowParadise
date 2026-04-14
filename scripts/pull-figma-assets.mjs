#!/usr/bin/env node
/**
 * Refreshes poster URLs in src/data/home-assets.js from the Figma Images API.
 * Usage: FIGMA_TOKEN=figd_... node scripts/pull-figma-assets.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const token = process.env.FIGMA_TOKEN;
if (!token) {
  console.error('Set FIGMA_TOKEN (personal access token).');
  process.exit(1);
}

const FILE = 'TToegAGr0o1H0zIuu1a4Vo';
const IDS = ['3:3326', '3:3594', '3:3595', '3:3596'];
const url = `https://api.figma.com/v1/images/${FILE}?ids=${IDS.join(',')}&format=png&scale=2`;

const res = await fetch(url, { headers: { 'X-Figma-Token': token } });
const data = await res.json();
if (data.err || !data.images) {
  console.error(data);
  process.exit(1);
}

const { images } = data;
const hero = images['3:3326'];
const s1 = images['3:3594'];
const s2 = images['3:3595'];
const s3 = images['3:3596'];

const out = `/**
 * Media tied to Figma file:
 * https://www.figma.com/design/${FILE}/Cowparadise-Website?node-id=3-3323
 *
 * Posters refreshed ${new Date().toISOString().slice(0, 10)} via scripts/pull-figma-assets.mjs
 *
 * Figma’s REST API does not ship MP4/WebM binaries—only raster exports. To use real video, export clips
 * from Figma into \`public/videos/\` and keep the \`video\` paths below.
 */
export const FIGMA_FILE_KEY = '${FILE}';

export const HOME_MEDIA = {
  hero: {
    nodeId: '3:3326',
    poster:
      '${hero}',
    /** Set to e.g. '/videos/hero.mp4' after exporting from Figma into \`public/videos/\` */
    video: null
  },
  shorts: [
    {
      nodeId: '3:3594',
      poster:
        '${s1}',
      video: null,
      title: 'Short 1'
    },
    {
      nodeId: '3:3595',
      poster:
        '${s2}',
      video: null,
      title: 'Short 2'
    },
    {
      nodeId: '3:3596',
      poster:
        '${s3}',
      video: null,
      title: 'Short 3'
    }
  ]
};
`;

writeFileSync(join(root, 'src/data/home-assets.js'), out);
console.log('Updated src/data/home-assets.js');
