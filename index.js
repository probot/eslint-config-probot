module.exports = {
  extends: 'xo/esnext',
  rules: {
    indent: [2, 2, {SwitchCase: 1}],
    // Because a lot of GitHub payloads include underscores
    camelcase: 1,
    'no-else-return': 0,
    'key-spacing': 0
  },
  env: {
    node: true,
    mocha: true
  }
};
