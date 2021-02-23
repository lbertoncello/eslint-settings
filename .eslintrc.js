module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
		mongo: true,
	},
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2021,
	},
	rules: {
		/* -- Possible Errors -- */
		'no-await-in-loop': 'off',
		'no-console': 'off',
		'no-constant-condition': [ 'error', { checkLoops: false } ],
		'no-extra-parens': 'off',
		'no-loss-of-precision': 'error',
		'no-promise-executor-return': 'error',
		'no-template-curly-in-string': 'error',
		'no-unreachable-loop': 'error',
		'no-unsafe-optional-chaining': 'error',
		'no-useless-backreference': 'error',
		'require-atomic-updates': 'error',

		/* -- Best Practices -- */
		'accessor-pairs': 'error',
		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		'class-methods-use-this': 'off',
		complexity: [ 'off' ],
		'consistent-return': 'error',
		curly: 'error',
		'default-case': 'error',
		'default-case-last': 'error',
		'default-param-last': [ 'error' ],
		'dot-location': [ 'error', 'object' ],
		'dot-notation': [
			'error',
			{
				allowKeywords: true,
			},
		],
		eqeqeq: 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'off',
		// eslint-disable-next-line no-magic-numbers
		'max-classes-per-file': [ 'error', 1 ],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-constructor-return': 'error',
		'no-div-regex': 'error',
		'no-else-return': [
			'error',
			{
				allowElseIf: false,
			},
		],
		'no-empty-function': 'error',
		'no-eq-null': 'error',
		'no-eval': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-implied-eval': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-loop-func': 'error',
		'no-magic-numbers': [
			'error',
			{
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				detectObjects: false,
				ignore: [
					-1,
					0,
					1,
				],
			},
		],
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-proto': 'error',
		'no-return-assign': 'error',
		'no-return-await': 'off',
		'no-script-url': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unused-expressions': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-warning-comments': 'off',
		'prefer-named-capture-group': 'off',
		'prefer-promise-reject-errors': 'error',
		'prefer-regex-literals': 'error',
		radix: [ 'error', 'as-needed' ],
		'require-await': 'error',
		'require-unicode-regexp': 'off',
		'vars-on-top': 'off',
		'wrap-iife': [ 'error', 'outside' ],
		yoda: 'error',

		/* -- Strict Mode -- */
		strict: [ 'off' ],

		/* -- Variables -- */
		'init-declarations': [ 'off' ],
		'no-label-var': 'error',
		'no-shadow': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',
		'no-unused-vars': 'off',
		'no-use-before-define': 'error',

		/* -- Stylistic Issues -- */
		'array-bracket-newline': [
			'error',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'array-bracket-spacing': [
			'error',
			'always',
			{
				arraysInArrays: false,
			},
		],
		'array-element-newline': [
			'error',
			{
				multiline: true,
				minItems: 3,
			},
		],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs' ],
		camelcase: [ 'error', { properties: 'never' } ],
		'capitalized-comments': [ 'off' ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'comma-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'never' ],
		'consistent-this': [ 'off' ],
		'eol-last': [ 'error', 'always' ],
		'func-call-spacing': [ 'error', 'never' ],
		'func-name-matching': 'error',
		'func-names': [ 'off' ],
		'func-style': [
			'error',
			'declaration',
			{
				allowArrowFunctions: true,
			},
		],
		'function-call-argument-newline': [ 'error', 'consistent' ],
		'function-paren-newline': [ 'error', 'multiline' ],
		'id-denylist': [ 'off' ],
		'id-length': 'off',
		'id-match': [ 'off' ],
		'implicit-arrow-linebreak': [ 'error', 'beside' ],
		indent: [ 'error', 'tab' ],
		'jsx-quotes': [ 'error', 'prefer-double' ],
		'key-spacing': [
			'error',
			{
				mode: 'strict',
			},
		],
		'keyword-spacing': [
			'error',
			{
				after: true,
				before: true,
			},
		],
		'line-comment-position': [
			'error',
			{
				position: 'above',
			},
		],
		'linebreak-style': [ 'error', 'unix' ],
		'lines-around-comment': [
			'error',
			{
				beforeBlockComment: true,
				allowBlockStart: true,
				allowClassStart: false,
				allowObjectStart: true,
				allowArrayStart: true,
			},
		],
		'lines-between-class-members': [ 'error', 'always' ],
		'max-depth': [
			'error',
			{
				max: 5,
			},
		],
		'max-len': [
			'error',
			{
				code: 80,
				ignoreUrls: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
		'max-lines': [
			'error',
			{
				max: 1000,
				skipBlankLines: true,
				skipComments: true,
			},
		],
		'max-lines-per-function': [ 'off' ],
		'max-nested-callbacks': [
			'error',
			{
				max: 10,
			},
		],
		'max-params': [
			'error',
			{
				max: 4,
			},
		],
		'max-statements': [ 'off' ],
		'max-statements-per-line': [
			'error',
			{
				max: 1,
			},
		],
		'multiline-comment-style': [ 'error', 'starred-block' ],
		'multiline-ternary': [ 'error', 'always-multiline' ],
		'new-cap': [
			'error',
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		'new-parens': [ 'error', 'always' ],
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 2,
			},
		],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'off',
		'no-inline-comments': [
			'error',
			{
				ignorePattern: 'webpackChunkName:\\s.+',
			},
		],
		'no-lonely-if': 'error',
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-multiple-empty-lines': [
			'error',
			{
				max: 2,
			},
		],
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-tabs': 'off',
		'no-ternary': 'off',
		'no-trailing-spaces': 'error',
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'nonblock-statement-body-position': [ 'error', 'beside' ],
		'object-curly-newline': [
			'error',
			{
				multiline: true,
				minProperties: 2,
				consistent: true,
			},
		],
		'object-curly-spacing': [
			'error',
			'always',
			{
				arraysInObjects: true,
				objectsInObjects: true,
			},
		],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: false,
			},
		],
		'one-var': [ 'error', 'never' ],
		'one-var-declaration-per-line': [ 'error', 'initializations' ],
		'operator-assignment': [ 'off' ],
		'operator-linebreak': [ 'error', 'after' ],
		'padded-blocks': [
			'error',
			{
				blocks: 'never',
				classes: 'always',
				switches: 'never',
			},
		],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
			{
				blankLine: 'always',
				prev: [
					'const',
					'let',
					'var',
				],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let',
					'var',
				],
				next: [
					'const',
					'let',
					'var',
				],
			},
			{
				blankLine: 'always',
				prev: 'directive',
				next: '*',
			},
			{
				blankLine: 'any',
				prev: 'directive',
				next: 'directive',
			},
			{
				blankLine: 'always',
				prev: [ 'case', 'default' ],
				next: '*',
			},
		],
		'prefer-exponentiation-operator': 'error',
		'prefer-object-spread': 'error',
		'quote-props': [ 'error', 'as-needed' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		'semi-spacing': 'error',
		'semi-style': [ 'error', 'last' ],
		'sort-keys': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': [ 'error', 'always' ],
		'space-in-parens': [ 'error', 'never' ],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': [ 'error', 'always' ],
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': [ 'off' ],
		'wrap-regex': 'error',

		/* -- ECMAScript 6 -- */
		'arrow-body-style': [ 'error', 'as-needed' ],
		'arrow-parens': [ 'error', 'always' ],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'generator-star-spacing': [
			'error',
			{
				before: true,
				after: false,
			},
		],
		'no-confusing-arrow': 'error',
		'no-duplicate-imports': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': [ 'error', 'consistent' ],
		'prefer-arrow-callback': 'off',
		'prefer-const': 'error',
		'prefer-destructuring': 'off',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'off',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': [ 'error', 'never' ],
		'sort-imports': 'off',
		'symbol-description': 'error',
		'template-curly-spacing': [ 'error', 'never' ],
		'yield-star-spacing': [ 'error', 'after' ],
	},
};
