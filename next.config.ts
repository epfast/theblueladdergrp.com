import withBundleAnalyzer from '@next/bundle-analyzer';
import dotenv from 'dotenv';
import type { NextConfig } from 'next';
import nextComposePlugins from 'next-compose-plugins';

dotenv.config();
/**
 * https://github.com/cyrilwanner/next-compose-plugins/issues/59
 */
const { withPlugins } = nextComposePlugins.extend(() => ({}));

/**
 * Next config
 * documentation: https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = withPlugins(
  [
    withBundleAnalyzer,
    {
      enabled: process.env.BUNDLE_ANALYZE === 'true',
    },
  ],
  {
    /**
     * add the environment variables you would like exposed to the client here
     * documentation: https://nextjs.org/docs/api-reference/next.config.js/environment-variables
     */
    env: {
      ENVIRONMENT_NAME: process.env.ENVIRONMENT_NAME,
    },

    /**
     * The experimental option allows you to enable future/experimental options
     * like React 18 concurrent features.
     */
    experimental: {
      // urlImports: true,
      // concurrentFeatures: true,
      // serverComponents: true,
    },

    /**
     * SWC minification opt-in
     * Please note that while not in experimental, the swcMinification may cause issues in your build.
     * example: https://github.com/vercel/next.js/issues/30429 (Yup email validation causes an exception)
     */
    // swcMinify: true,

    poweredByHeader: false,
    compress: true,

    /**
     * add the headers you would like your next server to use
     * documentation: https://nextjs.org/docs/api-reference/next.config.js/headers
     *                https://nextjs.org/docs/advanced-features/security-headers
     */

    async headers() {
      return [
        {
          // Apply these Contentful headers to all routes in your application.
          source: '/:path*',
          headers: [
            {
              key: 'X-DNS-Prefetch-Control',
              value: 'on',
            },
            {
              key: 'Strict-Transport-Security',
              value: 'max-age=63072000; includeSubDomains; preload',
            },
            {
              key: 'X-Frame-Options',
              value: 'SAMEORIGIN',
            },
            {
              key: 'Content-Security-Policy',
              value: `frame-ancestors 'self' https://app.contentful.com https://app.eu.contentful.com`,
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'X-XSS-Protection',
              value: '1; mode=block',
            },
            {
              key: 'Referrer-Policy',
              value: 'no-referrer',
            },
          ],
        },
      ];
    },

    /**
     * https://nextjs.org/docs/basic-features/image-optimization
     * Settings are the defaults
     */
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.ctfassets.net',
        },
        {
          protocol: 'https',
          hostname: 'images.eu.ctfassets.net',
        },
        {
          protocol: 'https',
          hostname: 'placehold.co',
        },
      ],
    },
    webpack(config: NextConfig) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  },
);

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     dangerouslyAllowSVG: true,

//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'placehold.co',
//         port: '',
//         pathname: '/**',
//       },
//     ],
//   },
// };

// export default nextConfig;
