# Tableau JavaScript API & Type declaration

[![Node.js CI](https://github.com/noverliu/tableau-api/actions/workflows/node.js.yml/badge.svg)](https://github.com/noverliu/tableau-api/actions/workflows/node.js.yml)

Tableau官方提供了用于嵌入Dashboard的JS API，但仅能通过添加外部文件引用[Link](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api.htm)，也没有提供TypeScript类型支持。

````html
<script src="https://YOUR-SERVER/javascripts/api/tableau-2.min.js"></script>
````
本项目基于Tableau官方API修改，并添加了类型支持。

详细API文档[参考官方](https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm)

### 安装

```bash
npm install tableau-js
```

### 调用

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