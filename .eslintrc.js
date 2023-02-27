module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["prettier"],
  ignorePatterns: [
    "test/**/*.spec.ts",
    // "lib/*",
    "node_modules/**",
    // "diagrams/**",
    "test/deprecated/*.{ts,js}",
    "./tsconfig.json",
  ],
  parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   project: "./tsconfig.json",
  //   sourceType: "module",
  // },
  plugins: ["@typescript-eslint"],
  root: true,
  outDir: "./lib",
  rootDirs: ["src", "tests"],
  exclude: ["node_modules", "lib", "src/deprecated"],
  include: ["src/**/*.ts", "test/**/*.spec.ts"],
  skipLibCheck: true,
  types: ["node", "mocha", "chai"],
};
