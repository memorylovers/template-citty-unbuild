import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    silent: false,
    testTimeout: 100000,
    env: {
      CONSOLA_LEVEL: "5",
    }
  },
});