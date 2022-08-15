# Tableau JavaScript API & Type declaration

[![Node.js CI](https://github.com/noverliu/tableau-api/actions/workflows/node.js.yml/badge.svg)](https://github.com/noverliu/tableau-api/actions/workflows/node.js.yml)

[中文版本](README_zh.md)

Tableau provide an official JS API to embed dashboard into webpage [link](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm). But the only way to use it is add external reference. The type support for TypeScript wasn't provided as well.

````html
<script src="https://YOUR-SERVER/javascripts/api/tableau-2.min.js"></script>
````

This project was modified base on Tableau official api. Type support was included.

* [More detail of Tableau JS API](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm)

### Install

```bash
npm install tableau-js
```

### Usage

```js
// JavaScript
import { Viz } from 'tableau-js'

const url='http://YOUR_DASHBOARD/';

// create container
const div=document.createElement('div');

const viz=new Viz(div, url);

document.body.append(div);
```

```TypeScript
// TypeScript
import { Viz, VizCreateOptions } from 'tableau';

const url='http://YOUR_DASHBOARD/';

// create container
const div=document.createElement('div');

const option: VizCreateOptions = {
	height: '800',
	width: '600'
};

const viz=new Viz(div, url, option);

document.body.append(div);
```

