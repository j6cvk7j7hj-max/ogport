import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const outputDirectory = resolve('dist/client');
const sitePrefix = '/ogport';
const textExtensions = new Set(['.html', '.rsc']);

async function rewriteOutput(directory) {
  for (const entry of await readdir(directory)) {
    const path = join(directory, entry);
    const details = await stat(path);

    if (details.isDirectory()) {
      await rewriteOutput(path);
      continue;
    }

    if (!textExtensions.has(extname(path))) continue;

    const source = await readFile(path, 'utf8');
    const updated = source
      .replaceAll('/_next/', `${sitePrefix}/_next/`)
      .replaceAll('/portfolio/', `${sitePrefix}/portfolio/`)
      .replaceAll('/favicon.svg', `${sitePrefix}/favicon.svg`);

    await writeFile(path, updated);
  }
}

await rewriteOutput(outputDirectory);
await writeFile(join(outputDirectory, '.nojekyll'), '');

const indexPath = join(outputDirectory, 'index.html');
const index = await readFile(indexPath, 'utf8');

if (!index.includes(`${sitePrefix}/_next/`)) {
  throw new Error('The GitHub Pages asset prefix is missing from index.html.');
}

if (/\b(?:src|href)="\/(?:_next|portfolio)\//.test(index)) {
  throw new Error('index.html still contains root-relative application assets.');
}

console.log(`GitHub Pages output is ready at ${indexPath}`);
