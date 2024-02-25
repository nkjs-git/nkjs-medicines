const DEFAULT_SCOPE = 'defaultScope'

const scope = ({ scope } = {}) => {
  if (!scope) {
    return DEFAULT_SCOPE
  }
  return Array.isArray(scope) ? [...scope, DEFAULT_SCOPE] : [DEFAULT_SCOPE, scope]
}

module.exports = { DEFAULT_SCOPE, scope }
