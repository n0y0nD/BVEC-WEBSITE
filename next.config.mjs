/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don't generate AGENTS.md when the dev server starts.
  agentRules: false,
};

export default nextConfig;
