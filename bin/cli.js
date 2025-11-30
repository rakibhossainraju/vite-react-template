#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const template = path.join(__dirname, "../template");

const target = process.argv[2];

if (!target) {
  console.log("Usage: create-light-vite <project-name>");
  process.exit(1);
}

fs.cpSync(template, target, { recursive: true });
console.log(`Project created at ${target}`);
