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

You can use ESLint in your Node.js project after moving the file called [.eslintrc.js](https://github.com/lbertoncello/eslint-settings/blob/master/.eslintrc.js), contained in this repository, to the project root or creating your own configuration file. [Here](https://eslint.org/docs/rules/) you can find the documentation for all current ESLint rules.

## Running ESLint

The following command will run ESLint on your project. Replace *{{file}}* by the file or directory where you want to run ESLint. If you want to run in your entire project, just replace *{{file}}* by *"./"*.

#### Yarn

```shell

yarn eslint {{file}} --fix

```

#### NPX

```shell

npx eslint {{file}} --fix

```

The output will show all parts of your code that do not follow the rules established in [.eslintrc.js](https://github.com/lbertoncello/eslint-settings/blob/master/.eslintrc.js).

## VS Code extensions

To make it easier to use ESLint, you can install some VS Code extensions that will do part of the job for you. I recommend installing the following extensions.

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
* [LintLens — ESLint rules made easier](https://marketplace.visualstudio.com/items?itemName=ghmcadams.lintlens)
* [eslint-disable-snippets](https://marketplace.visualstudio.com/items?itemName=drknoxy.eslint-disable-snippets)

#### Setting up autofix

Some ESLint rules can be corrected automatically.  You can configure VS Code to do this when saving your file or using code formatting ([ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) must be installed). First you need to open VS Code settings (*"Ctrl + ,"* on Windows). In the *Search settings* field, type *"save"*, then click on *"Edit in settings.json"*.  Set the configurations as follow. 

```javascript
"[javascript]": {
	"editor.defaultFormatter":  "rvest.vs-code-prettier-eslint"
},
"[json]": {
	"editor.defaultFormatter":  "rvest.vs-code-prettier-eslint"
},
"[jsonc]": {
	"editor.defaultFormatter":  "rvest.vs-code-prettier-eslint"
},
"editor.codeActionsOnSave": {
	"source.fixAll.eslint":  true
},
"eslint.validate": ["javascript"],
```

**NOTE: You do not need to change any other settings in *settings.js***