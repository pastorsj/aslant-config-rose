/**
 * Copyright 2016 Rose-Hulman Institute of Technology. All rights reserved.
 */
'use strict'

module.exports = {
  extends: 'xo',
  globals: {
    goog: true
  },
  rules: {
    'indent': [2, 4, {
      SwitchCase: 1
    }],
    'space-before-function-paren': [2, 'never'],
    'valid-jsdoc': [2, {
      requireReturn: true,
      prefer: {
        returns: 'return'
      }
    }],
    'require-jsdoc': 1,
    'max-len': [1, 120, 4, {
      ignoreComments: true,
      ignoreUrls: true
    }],
    'new-cap': ['error', {
      'capIsNew': false
    }],

    //  Resetting things that eslint-config-xo has an opinion about, but the
    //  Google Style Guide doesn't.
    'curly': 0,
    'no-floating-decimal': 0,
    'no-unused-vars': [2, {
      'args': 'none'
    }]
  }
}
