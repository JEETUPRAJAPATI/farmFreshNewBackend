// esbuild.config.js
import { build } from 'esbuild'
import path from 'path'

build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    platform: 'node',
    format: 'esm',
    alias: {
        '@shared': path.resolve(__dirname, 'src/shared'),
    },
})
