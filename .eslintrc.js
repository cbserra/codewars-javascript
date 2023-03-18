module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["prettier"],
  ignorePatterns: [
    "test/kyu/**/*.spec.ts",
    "node_modules/**",
    "./tsconfig.json",
  ],
  parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   project: "./tsconfig.json",
  //   sourceType: "module",
  // },
  plugins: ["@typescript-eslint"],
  root: true,
  outDir: "./dist",
  rootDirs: ["src"],
  exclude: ["node_modules", "dist", "test"],
  // include: ["src/**/*.ts", "test/**/*.spec.ts"],
  skipLibCheck: true,
  types: ["node", "mocha", "chai"],
};
