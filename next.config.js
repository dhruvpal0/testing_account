// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false, // optional: strict mode temporarily disable karne ke liye (debug purpose)
//   webpackDevMiddleware: (config) => {
//     config.watchOptions = {
//       poll: 1000,          // har 1000 ms (1 sec) me file changes check karega
//       aggregateTimeout: 300,
//     };
//     return config;
//   },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
