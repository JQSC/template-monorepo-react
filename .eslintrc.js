/**
 * 校验代码质量和风格命令 eslint --ext js,jsx,ts,tsx src
 *
 * https://zh-hans.eslint.org/docs/latest/use/getting-started
 */
module.exports = {
  // extends: ['plugin:@tools/eslint-plugin-lp/react-recommended', 'plugin:storybook/recommended'],
  extends: ['plugin:storybook/recommended'],
  rules: {
    // 自定义校验规则: 0(off)  1(warning)  2(error)
    'no-console': 2
  }
};
