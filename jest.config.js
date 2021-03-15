const { defaults } = require('jest-config')

module.exports = {
  transform: {
    ...defaults.transform,
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts', 'tsx'
  ],
  testRegex: [
    ...defaults.testRegex,
    '^.+\\.spec\\.ts$'
  ]
}
