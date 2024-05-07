module.exports = {
  './**/*.{js,jsx,ts,tsx,vue}': ['eslint --fix'],
  './**/*.{css,less,_less,vue}': ['stylelint --fix'],
  './**/*.{js,ts,json,tsx,css,less,scss,html,shtml,md,vue}': ['prettier --write']
}
