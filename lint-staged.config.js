module.exports = {
  '*.{ts,tsx,js,jsx,css,md}': (filenames) => [
    'npm run format:fix',
    'npm run validate'
  ]
}
