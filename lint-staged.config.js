module.exports = {
  '*.{ts,tsx,js,jsx,css,md}': (filenames) => [
    'npm run format:fix',
    'npm run lint:fix',
    'git add .',
    'npm run lint',
    'npm run format:check',
    'npm run type:check'
  ]
}
