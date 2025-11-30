#!/usr/bin/env node

import fs from "fs";
import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packageJsonPath = path.join(__dirname, "../package.json");

try {
  // Read current package.json
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const currentVersion = packageJson.version;

  console.log(`📦 Current version: ${currentVersion}`);

  // Bump version
  console.log("🚀 Bumping version...");
  execSync("npm version patch --no-git-tag-version", { stdio: "inherit" });

  // Read new version
  const updatedPackageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf-8"));
  const newVersion = updatedPackageJson.version;

  console.log(`✅ New version: ${newVersion}`);

  // Output version for GitHub Actions
  console.log(`::set-output name=new_version::${newVersion}`);

  // Configure Git
  console.log("🔧 Configuring Git...");
  execSync('git config --local user.email "action@github.com"', { stdio: "inherit" });
  execSync('git config --local user.name "GitHub Action"', { stdio: "inherit" });

  // Commit version bump
  console.log("📝 Committing version bump...");
  execSync("git add package.json", { stdio: "inherit" });
  execSync(`git commit -m "chore: bump version to ${newVersion}"`, { stdio: "inherit" });

  // Push to main
  console.log("⬆️ Pushing to main...");
  execSync("git push origin main", { stdio: "inherit" });

  console.log("✨ Release script completed successfully!");
  console.log(`📤 Ready to publish v${newVersion}`);

  process.exit(0);
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
