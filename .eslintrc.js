module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
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
		'no-await-in-loop': 'error',
		'no-console': 'off',
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
		'dot-notation': [ 'error', { allowKeywords: false } ],
		eqeqeq: 'error',
		'grouped-accessor-pairs': 'error',
		'guard-for-in': 'off',
		'max-classes-per-file': [ 'error', 1 ],
		'no-alert': 'error',
		'no-caller': 'error',
		'no-constructor-return': 'error',
		'no-div-regex': 'error',
		'no-else-return': [ 'error', { allowElseIf: false } ],
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
		'no-magic-numbers': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-nonoctal-decimal-escape': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-param-reassign': [ 'error', { props: true } ],
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
		'no-use-before-define': 'error',

		/* -- Strict Mode -- */
		strict: [ 'off' ],

		/* -- Variables -- */
		'init-declarations': [ 'off' ],
		'no-label-var': 'error',
		'no-shadow': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'error',

		/* -- Stylistic Issues -- */
		'array-bracket-newline': [ 'error', { multiline: true, minItems: 3 } ],
		'array-bracket-spacing': [
			'error',
			'always',
			{ arraysInArrays: false },
		],
		'array-element-newline': [ 'error', { multiline: true, minItems: 3 } ],
		'block-spacing': [ 'error', 'always' ],
		'brace-style': [ 'error', '1tbs' ],
		camelcase: 'error',
		'capitalized-comments': [ 'off' ],
		'comma-dangle': [ 'error', 'always-multiline' ],
		'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
		'comma-style': [ 'error', 'last' ],
		'computed-property-spacing': [ 'error', 'never' ],
		'consistent-this': ["off"],

		indent: [ 'error', 'tab' ],
		quotes: [ 'error', 'single' ],
		semi: [ 'error', 'always' ],
		'no-undef': 'error',
		'no-unused-vars': 'off',
		'no-constant-condition': 'error',
	},
};
