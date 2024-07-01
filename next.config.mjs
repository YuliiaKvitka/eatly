// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src/styles'),
    ],
  },
};

export default nextConfig;

