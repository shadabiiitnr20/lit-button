import { defineConfig } from 'vite';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(
        __dirname,
        'src/button-component/button.component.ts'
      ),
      name: 'lit-button',
      fileName: (format) => `lit-button.${format}.js`,
    },
    rollupOptions: {
      external: ['lit'],
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
});
