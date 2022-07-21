import { defineConfig } from 'tsup';
export default defineConfig({
  entry: {
    index: 'src/node/cli.ts',
    client: 'src/client/client.ts'
  },
  format: ['esm', 'cjs'],
  splitting: false,
  sourcemap: true,
  target: 'es2020',
  external: ['@babel/core']
})
