import type { NextConfig } from "next";

/**
 * GitHub Pages 배포 시:
 * - repoName을 실제 레포지토리 이름으로 변경
 * - 예: https://username.github.io/wedding-card/ => repoName = "wedding-card"
 */
const repoName = "wedding-invitation"; 

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // GitHub Pages는 서브 경로(/repoName)로 올라가서 basePath 필요
  basePath: isGithubPages ? `/${repoName}` : undefined,
  assetPrefix: isGithubPages ? `/${repoName}/` : undefined
};

export default nextConfig;
