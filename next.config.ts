import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    // SVG 설정 추가
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    })

    return config
  },
}

export default nextConfig
