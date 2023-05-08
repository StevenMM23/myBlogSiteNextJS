/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { 
    mongodb_username: 'admin',
    mongodb_password: 'admin',
    mongodb_clusterName: 'cluster0',
    mongodb_database: 'my-site',

  }
}

module.exports = nextConfig
