前端架构(antd/redux/saga)

### 技术栈
* react https://facebook.github.io/react/
* antd https://ant.design/index-cn
* saga http://leonshi.com/redux-saga-in-chinese/docs/introduction/BeginnerTutorial.html
* redux https://github.com/camsong/redux-in-chinese
* sass http://sass-lang.com/

### 构建工具
webpack + babel

### 运行起来
* clone代码并在terminal中进入代码目录
* npm install
* npm run start:dev
* 其他npm命令参看package.json

### 项目结构

|-app: 前端代码目录  
&emsp;|-actions: 对应redux的action  
&emsp;|-components: 所有通用组件  
&emsp;|-constants: 常量目录  
&emsp;&emsp;|-actionType.js: action事件类型定义  
&emsp;&emsp;|-api.js: 后端api地址定义  
&emsp;|-containers: 与router里url一一对应的页面组件  
&emsp;&emsp;|-App: 对应路径／  
&emsp;&emsp;|-NotFound: 404  
&emsp;&emsp;|-Root.js: 项目根组件  
&emsp;|-entry:   
&emsp;&emsp;|-index.html: html模版  
&emsp;&emsp;|-index.js: webpack编译入口  
&emsp;|-reducers:   
&emsp;&emsp;|-index.js: reducer集成  
&emsp;|-sagas:   
&emsp;&emsp;|-index.js: saga集成  
&emsp;|-services: 封装对象操作，多为前后端交互逻辑  
&emsp;|-store:   
&emsp;|-styles: 全局样式文件  
&emsp;|-utils: 工具方法  
&emsp;&emsp;|-fetch.js:   
&emsp;|-routes.js: 路由定义  
|-mocks: mock api文件目录  
|-node_modules: npm依赖  
|-.babelrc:   
|-.eslint:   
|-favicon.icon:   
|-server.js  
|-webpack.config.js:   
|-webpack.production.config.js:   

### 命名规则
* 组件目录首字母大写，组件入口文件为index.js
* 对于颜色、字体等样式设置，在styles的variables中定义，其他scss文件中引入使用

### 兼容性
* chrome
* firefox

### 适用系统
由于引入了antd，因此更适用于管理性质的系统。

### 维护人
yuan.gao@dianrong.com
