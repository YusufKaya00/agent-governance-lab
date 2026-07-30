const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'README.md',
  'LICENSE',
  '.github/CODEOWNERS',
  'SECURITY.md'
];

let allPassed = true;

requiredFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing required file: ${file}`);
    allPassed = false;
  }
});

if (allPassed) {
  console.log('Policy Check ✅');
  process.exit(0);
} else {
  console.error('Policy Check ❌');
  process.exit(1);
}
