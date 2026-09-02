const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "portfolio";
const basePath = isGitHubPages ? `/${repositoryName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: "akamai",
    path: `${basePath}/`,
  },
};

module.exports = nextConfig;
