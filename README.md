# Creating a React App with Parcel

This repository provides a step-by-step guide on how to create a basic React application using Parcel, a fast web application bundler. Whether you're new to React or simply exploring Parcel as a bundler, this guide will help you set up your project quickly and efficiently.

## Prerequisites

Before you start, ensure that you have Node.js and npm installed on your machine.

## Initial setup

1. Create a new project folder:
   ```
   mkdir my-react-app
   cd my-react-app
   ```
2. Initialise your project with a `package.json` file:
   ```
   npm init -y
   ```
3. Install React, React DOM, Parcel, ESLint and Prettier as project dependencies:
   ```
   npm install react react-dom
   npm install parcel
   npm install eslint prettier
   ```
4. Set up ESLint with a popular configuration:
   ```
   npm install eslint-config-react-app
   ```
   Create a file named `.eslintrc.json` in your project's root folder and add the following content:
   ```
   {
     "extends": "react-app"
   }
   ```

## Project structure

Once you've completed the initial setup, you can choose your project structure. The structure chosen for this repo is shown below.

```
my-react-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  ├── src/
  │   ├── components/
  │   │   ├── App/
  │   │   │   ├── App.js
  │   │   │   ├── index.js
  ├── index.js
  ├── global-styles.css
  ├── .gitignore
  ├── .eslintrc.json
  ├── package.json
  ├── package-lock.json

```

If you're curious about this particular structure, check out [this link](https://www.joshwcomeau.com/react/file-structure/).

### Building the React app

1. Create the content for the `index.html`, `App.js`, `index.js` files. The boilerplate markup can be found in the files in this repo. Make sure to include the correct filepath to each file according to your project structure.

2. In the `package.json` file, add custom scripts for development and building:
   ```
   "scripts": {
     "dev": "parcel public/index.html",
     "build": "parcel build public/index.html"
   }
   ```
3. Then to run the app in development, run the command `npm run dev` and open http://localhost:1234/ in your browser to see the HTML file that you created.

## Git Integration

You can initialise a Git repository in your project folder using the following commands:

```
git init
git add .
git commit -m "Initial commit"
```

Don't forget to create a `.gitignore` file in your project folder (see the one in the repo).

## Installing additional packages

You can install additional packages using the `npm install` command. For example, to install a package named `new-component`, use the following:

```
npm install new-component
```

## Common issues

If you encounter build errors or unexpected issues, consider clearing the Parcel cache:

```
rm -rf .parcel-cache
```

Or better yet, install a cross-platform tool for removing files/directories:

```
npm install rimraf
```

Before adding this script to your `package.json` file, which will automatically run everytime before `npm run dev`, and will remove the `dist` and `.parcel-cache` folders to help ensure a fresh development environment:

<pre>
  <code>
  "scripts": {
    <strong>"predev": "rimraf .parcel-cache dist",</strong>
    "new-component": "new-component",
    "dev": "parcel public/index.html",
    "build": "parcel build public/index.html"
  },
  </code>
</pre>

If there are any issues with Prettier, reloading VSCode (or whatever source-code editor you use) may help.

## Credits

- [Building a web app with Parcel](https://parceljs.org/getting-started/webapp/)
- [React recipe](https://parceljs.org/recipes/react/)
- [Joy of React](https://courses.joshwcomeau.com/joy-of-react)
- [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app)
