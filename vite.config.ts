import { defineConfig } from 'vite';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
    resolve: {
        alias: {
            buffer: require.resolve('buffer/')
        }
    },
    define: {
        global: {},
        Buffer: 'buffer.Buffer'
    }
});
