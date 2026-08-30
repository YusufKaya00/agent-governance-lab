const fs = require("fs");

const inputPath = "data/products.json";
const outputPath = "validation-report.json";

const products = JSON.parse(fs.readFileSync(inputPath, "utf8"));

const invalidProducts = products.filter(
  (product) => typeof product.stock !== "number" || product.stock < 0
);

const report = {
  totalProducts: products.length,
  invalidProducts: invalidProducts.length,
  passed: invalidProducts.length === 0,
  invalidIds: invalidProducts.map((product) => product.id),
};

fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));

console.log(JSON.stringify(report, null, 2));

process.exit(report.passed ? 0 : 1);
