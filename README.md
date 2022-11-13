# ClioWP Blocks Boilerplate


ClioWP Blocks Boilerplate is a Free WordPress Gutenberg block-type Plugin Boilerplate for Developers.


## Links

* Website https://github.com/pontikis/cliowp-blocks-boilerplate

## How to use it

In order to create a custom Gutenberg block, actually, you have to create a plugin. A block-type WordPress plugin.

Official documentation: https://developer.wordpress.org/block-editor/how-to-guides/block-tutorial/writing-your-first-block-type/

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

Details at: https://www.pontikis.net/blog/how-to-write-js-and-css-in-wordpress-with-industry-standard-tools

## The block.json file

`block.json` (in the root of your plugin folder) is the canonical way to register a block-type plugin since WordPress 5.8

This file allows your plugin to be included in WordPress block directory https://wordpress.org/plugins/browse/block/

Also it makes assets (JS and CSS) management more easy.

```javascript
{
    "$schema": "https://schemas.wp.org/trunk/block.json",
    "apiVersion": 2,
    "name": "cliowp-blocks/boilerplate",
    "title": "ClioWP Blocks Boilerplate",
    "category": "common",
    "icon": "star-empty",
    "description": "Free WordPress Gutenberg block-type Plugin Boilerplate for Developers",
    "attributes": {
        "headline": {
            "type": "string",
            "default": "Hello, Gutenberg!"
        },
        "bgColor": {
            "type": "string",
            "default": "#f1f1f1"
        },
        "borderColor": {
            "type": "string",
            "default": "#cac8c8"
        },
        "headlineAlignment": {
            "type": "string",
            "default": "left"
        }
    },
    "example": {
        "headline": "Hello, Gutenberg!",
        "bgColor": "#f1f1f1",
        "borderColor": "#cac8c8",
        "headlineAlignment": "left"
    },
    "textdomain": "td-cliowp-blocks-boilerplate",
    "editorScript": "file:./build/editor.js",
    "editorStyle": "file:./build/editor.css",
    "script": "file:./build/frontend.js",
    "style": "file:./build/frontend.css"
}
```

  * `editorScript`: Javascript will only be enqueued in the context of the editor.
  * `editorStyle`: CSS will only be enqueued in the context of the editor.
  * `script`: Javascript will be enqueued both in the editor the front end.
  * `style`: CSS will be enqueued both in the editor the front end.
  * `icon`: from Dashicons without the dashicon- prefix https://developer.wordpress.org/resource/dashicons

As you can see in the official documentation
  * there is a `viewScript` property, but it will not be used if you are using a PHP render callback
  * there is not (at least for now) a `viewStyle` property (https://github.com/WordPress/gutenberg/issues/41236)

So, I use `script` and `style` for front end assets.

Reference: https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/
