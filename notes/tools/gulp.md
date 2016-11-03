# gulp

## 1. 入门

1. 全局安装

    ```shell
    npm install -g gulp
    ```

2. 作为项目开发依赖

    ```shell
    npm install --save-dev gulp
    ```

3. 在项目根目录下，创建一个名为`gulpfile.js`的文件

    ```javascript
    var gulp = require("gulp");

    gulp.tast("default", function () {
        // 任务代码
    });
    ```

4. 运行gulp，执行默认任务

    ```shell
    # 运行默认任务
    gulp <task>
    ```

## 资料

1. [中文官网](http://www.gulpjs.com.cn/docs/getting-started/)