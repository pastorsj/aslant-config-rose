/**
 * Copyright 2016 Rose-Hulman Institute of Technology. All rights reserved.
 */
'use strict';

module.exports = {
    'extends': 'xo',
    'globals': {
        goog: true
    },
    'rules': {
        'indent': [2, 4, {
            SwitchCase: 1
        }],
        'space-before-function-paren': [2, 'never'],
        'valid-jsdoc': [
            2,
            {
                prefer: {
                    'virtual': 'abstract',
                    'extends': 'augments',
                    'constructor': 'class',
                    'const': 'constant',
                    'defaultvalue': 'default',
                    'desc': 'description',
                    'host': 'external',
                    'fileoverview': 'file',
                    'overview': 'file',
                    'emits': 'fires',
                    'func': 'function',
                    'method': 'function',
                    'var': 'member',
                    'arg': 'param',
                    'argument': 'param',
                    'return': 'returns',
                    'exception': 'throws'
                },
                requireReturn: false
            }
        ],
        'quote-props': [2, 'consistent-as-needed'],
        'require-jsdoc': 1,
        'max-len': [1, 120, 4, {
            ignoreComments: true,
            ignoreUrls: true
        }],
        'no-negated-condition': 1,
        'guard-for-in': 1,
        'no-extend-native': 1,
        'no-loop-func': 1,
        'new-cap': ['error', {
            capIsNew: false
        }],
        'camelcase': 2,
        //  Resetting things that eslint-config-xo has an opinion about, but the
        //  Google Style Guide doesn't.
        'curly': 0,
        'no-floating-decimal': 0,
        'no-unused-vars': [2, {
            args: 'none'
        }],
        'linebreak-style': 0
    }
};
