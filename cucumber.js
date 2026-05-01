module.exports = {
  default: {
    paths: ['tests/feature/**/*.feature'],
    require: ['tests/steps/**/*.ts'],
    requireModule: ['ts-node/register'],
    format: ['progress-bar', 'html:cucumber-report.html'],
    timeout: 30000,
    formatOptions: {
      snippetInterface: 'async-await'
    }
  }
};
