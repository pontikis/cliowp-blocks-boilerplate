# ClioWP Blocks Boilerplate


ClioWP Blocks Boilerplate is a Free WordPress Gutenberg block-type Plugin Boilerplate for Developers.


## Links

* Website https://github.com/pontikis/cliowp-blocks-boilerplate

## How to use it

* Create a folder in wp-content/plugins for your block-type plugin
* Copy boilerplate in this folder
* Define your project with `npm init` (this will create `package.json` file)
* Install @wordpress/scripts `npm install @wordpress/scripts --save-dev`
* Add `start` and `build` scripts in package.json
```javascript
  "scripts": {
    "start": "wp-scripts start src/editor.js src/frontend.js",
    "build": "wp-scripts build src/editor.js src/frontend.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
* Run `npm run start`

Details https://www.pontikis.net/blog/how-to-write-js-and-css-in-wordpress-with-industry-standard-tools
