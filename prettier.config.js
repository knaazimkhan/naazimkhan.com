const functions = ['cn', 'clsx', 'cva']
/** @type {import("prettier").Config} */

export default {
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
  semi: false,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: 'avoid',
  tailwindFunctions: functions,
  customFunctions: functions,
  endingPosition: 'absolute-with-indent',
  importOrder: ['^@/(components|hooks|lib|public)/?(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    'prettier-plugin-classnames',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-merge',
  ],
}
