# ESLint for Node.js projects

The main purpose of this repository is to provide the source code and instructions for using ESLint in Node.js projects. In [.eslintrc.js](https://github.com/lbertoncello/eslint-settings/blob/master/.eslintrc.js), you can find an example of ESLint settings designed for use in Express.js projects.

## Installation

To install ESLint on your system you can use one of the following commands.

#### Yarn

```shell
yarn add global eslint
```

#### NPM

```shell
npm install -g eslint
```

## Setting up your project

You can use ESLint in your Node.js after moving the file called [.eslintrc.js](https://github.com/lbertoncello/eslint-settings/blob/master/.eslintrc.js) contained in this repository to the project root or creating your own configuration file. [Here](https://eslint.org/docs/rules/) you can find the documentation for all current ESLint rules.

## Running ESLint

The following command will run ESLint on your project. Just replace *{{file}}* by the file or directory where you want to run ESLint.

#### Yarn
```shell 
yarn eslint {{file}} --fix
```

#### NPX
```shell 
npx eslint {{file}} --fix
```

The output will show all parts of your code that do not follow the rules established in [.eslintrc.js](https://github.com/lbertoncello/eslint-settings/blob/master/.eslintrc.js). 


