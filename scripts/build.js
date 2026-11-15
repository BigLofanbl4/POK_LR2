const { mkdirSync, copyFileSync } = require('node:fs');

mkdirSync('dist', { recursive: true });
copyFileSync('src/calculator.js', 'dist/calculator.js');
console.log('Build output: dist/calculator.js');
