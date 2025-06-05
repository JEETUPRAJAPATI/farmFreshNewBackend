// esbuild.config.js
const { build } = require('esbuild');

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    format: 'esm',
    platform: 'node',
    outdir: 'dist',
    packages: 'external',
}).catch(() => process.exit(1));
