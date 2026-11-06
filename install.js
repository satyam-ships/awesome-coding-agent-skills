#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');

const id = process.argv[2];
if (!id) { console.error('Usage: node install.js <category>/<skill>'); process.exit(1); }
const src = path.join(__dirname, 'skills', `${id}.md`);
if (!fs.existsSync(src)) { console.error(`Skill not found: ${id}`); process.exit(1); }
const dest = path.join(process.cwd(), '.claude', 'skills', path.basename(id), 'SKILL.md');
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.copyFileSync(src, dest);
console.log(`Installed ${id} -> ${path.relative(process.cwd(), dest)}`);
