const { scope, DEFAULT_SCOPE } = require('./scope')
const { hasCommitted } = require('./transaction')

const delay = (ms) => (x) => new Promise(resolve => setTimeout(() => resolve(x), ms))

const parseConfig = config => Object.keys(config || {})
  .filter(key => !['database', 'username', 'password'].includes(key))
  .reduce((newConfig, key) => {
    newConfig[key] = config[key]
    return newConfig
  }, {})

module.exports = {
  DEFAULT_SCOPE,
  delay,
  parseConfig,
  scope,
  hasCommitted
}
