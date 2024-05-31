# Creating a React App with Parcel

This repository provides a step-by-step guide on how to create a basic React application using Parcel, a fast web application bundler.

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

(Note: This is a cool package that helps with the suggested file structure. Add this to `"scripts"` in `package.json`: `"new-component": "new-component",`, then any time you want to add a new component, run: `npm run new-component NameOfNewComponent`)

## Common issues

If you encounter build errors or unexpected issues, consider clearing the Parcel cache:

```
rm -rf .parcel-cache
```

Or better yet, install a cross-platform tool for removing files/directories:

```
npm install rimraf
```

Then add this script to your `package.json` file, which will automatically run everytime before `npm run dev`, and will remove the `dist` and `.parcel-cache` folders to help ensure a fresh development environment:

<pre>
  <code>
  "scripts": {
    <strong>"predev": "rimraf .parcel-cache dist",</strong>
    "dev": "parcel public/index.html",
    "build": "parcel build public/index.html"
  },
  </code>
</pre>

If there are any issues with Prettier, reloading VSCode (or whatever source-code editor you use) may help.

## Updates

1. If working with **Styled Components**, in order to get annotated class names corresponding to component names, run:
   ```
   npm install --save-dev babel-plugin-styled-components
   ```
   Then add a configuration file name `.babelrc` with the following content in the root folder of your project:
   ```
   {
     "plugins": ["babel-plugin-styled-components"]
   }
   ```
2. If you want to specify where your static files go, then you can install a package with this command:
   ```
   npm install parcel-reporter-static-files-copy
   ```
   Add this is `package.json` (choosing to name the static folder `assets`):
   ```
   "staticFiles": {
     "staticPath": "assets"
   }
   ```
   Create a new configuration file `.parcelrc` and add this to it:
   ```
   {
     "extends": [
       "@parcel/config-default"
     ],
     "reporters": [
       "...",
       "parcel-reporter-static-files-copy"
     ]
   }
   ```
   Create a new folder in your root called `assets`. This is where you can put images, etc. For example, you put the file `bunny.png` directly in the assets folder, then the image element that uses it might look like this:
   ```
   <img alt="Cute bunny" src="/bunny.png" />
   ```
3. I had some issues with the installation of the ESLint configuration, which may or may not have something to do with the latest version of ESLint. So, maybe install both at the same time with this particular version of ESLint (as suggested from the config package description):
   ```
   npm install eslint-config-react-app eslint@^8.0.0
   ```

## Credits

- [Joy of React](https://courses.joshwcomeau.com/joy-of-react)
- [Building a web app with Parcel](https://parceljs.org/getting-started/webapp/)
- [React recipe](https://parceljs.org/recipes/react/)
- [eslint-config-react-app](https://www.npmjs.com/package/eslint-config-react-app)
- [parcel-reporter-static-files-copy](https://www.npmjs.com/package/parcel-reporter-static-files-copy)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components)
- [new-component](https://www.npmjs.com/package/new-component)
