// Not my code. Attribution below
/* Purpose
  Firebase needs certain rewrite rules in place, in order to function properly with
  Next.js' static routing. This only applies to statically generated Next.js
  projects (i.e. built by 'next build' 'next export')
  
  Inspired by the discussion at:
  https://github.com/firebase/firebase-js-sdk/discussions/4980

  Code fetched from:
  https://gist.github.com/jeff-r-koyaltech/6195f546764443d0cc7c5efe48fbe896
*/


import fsProm from 'fs/promises';
import path from 'path';
import {
  fileURLToPath,
} from 'url';

console.info('Assumes you have already ran "next build && next export"');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRootPath = path.join(
  __dirname,
  '..',
  '..',
);

const routeManifestPath = path.join(
  projectRootPath,
  'frontend',
  '.next',
  'routes-manifest.json',
);

const firebaseJsonPath = path.join(
  projectRootPath,
  'firebase.json',
);

const routeManifestTxt = await fsProm.readFile(routeManifestPath, 'utf8');
const routeManifest = JSON.parse(routeManifestTxt);

const modifiedRoutes = routeManifest.dynamicRoutes.map(({
  page,
  regex,
}) => {
  const destination = `${page}/index.html`;
  return {
    destination,
    regex,
  };
});

const firebaseJsonTxt = await fsProm.readFile(firebaseJsonPath, 'utf8');
const firebaseJson = JSON.parse(firebaseJsonTxt);

firebaseJson.hosting.rewrites = modifiedRoutes;

const firebaseJsonModTxt = JSON.stringify(firebaseJson, null, 2);
// console.log(firebaseJsonModTxt);
await fsProm.writeFile(firebaseJsonPath, firebaseJsonModTxt, 'utf8');

console.log('Done! Commit the changes if you\'re happy with them.');