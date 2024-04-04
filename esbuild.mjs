import esbuild from 'esbuild';
import stylexPlugin from '@stylexjs/esbuild-plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

esbuild.build({
    entryPoints: ['style/index.js'],
    bundle: true,
    outfile: './.es-build/index.js',
    format: 'esm',
    target: [
        "chrome87"
    ],
    minify: false,
    plugins: [
        stylexPlugin({
            // If set to 'true', bundler will inject styles in-line
            // Do not use in production
            dev: false,
            // Required. File path for the generated CSS file
            generatedCSSFileName: path.resolve(__dirname, '.es-build/stylex.css'),
            // Aliases for StyleX package imports
            // default: '@stylexjs/stylex'
            stylexImports: ['@stylexjs/stylex'],
            // Required for CSS variable support
            unstable_moduleResolution: {
                // type: 'commonJS' | 'ESModules' | 'haste'
                // default: 'commonJS'
                type: 'commonJS',
                // The absolute path to the root of your project
                rootDir: __dirname,
            },
        }),
    ],
})