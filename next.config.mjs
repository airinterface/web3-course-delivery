/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: ['./styles'],
  },


};

export default nextConfig;
