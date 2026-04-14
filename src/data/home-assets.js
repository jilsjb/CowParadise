/**
 * Media tied to Figma file:
 * https://www.figma.com/design/TToegAGr0o1H0zIuu1a4Vo/Cowparadise-Website?node-id=3-3323
 *
 * `poster*` URLs come from GET /v1/images (PNG). These expire; run `npm run figma:pull-assets` to refresh.
 *
 * Figma’s REST API does not ship MP4/WebM binaries—only raster exports. To use real video, export clips
 * from Figma (or upload the same assets you used as fills) into `public/videos/` and set the optional
 * `video` paths below.
 */
export const FIGMA_FILE_KEY = 'TToegAGr0o1H0zIuu1a4Vo';

export const HOME_MEDIA = {
  hero: {
    nodeId: '3:3326',
    poster:
      'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/315553da-1e16-42a4-b210-faa51628085f',
    /** Set to e.g. '/videos/hero.mp4' after exporting from Figma into `public/videos/` */
    video: null
  },
  shorts: [
    {
      nodeId: '3:3594',
      poster:
        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b0b6235-57ef-4dbd-be7a-10aff3d4ee0b',
      video: null,
      title: 'Short 1'
    },
    {
      nodeId: '3:3595',
      poster:
        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c44650d-38b4-4647-9fe7-fae09bacb250',
      video: null,
      title: 'Short 2'
    },
    {
      nodeId: '3:3596',
      poster:
        'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06c72108-e502-46af-8a86-ab390196106f',
      video: null,
      title: 'Short 3'
    }
  ]
};
