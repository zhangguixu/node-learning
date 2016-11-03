# npm 常用命令

## 1. 使用国内镜像

### 1.1 淘宝npm镜像

* 搜索地址：http://npm.taobao.org/
* registry地址：http://registry.npm.taobao.org/

### 1.2 cnpmjs镜像

* 搜索地址：http://cnpmjs.org/
* registry地址：http://r.cnpmjs.org/

### 1.3 使用方法

1. 临时使用

    ```shell
    npm --registry https://registry.npm.taobao.org install [module]
    ```

2. 持久使用

    ```shell
    npm config set registry https://registry.npm.taobao.org

    # 查看配置信息
    npm config get registry
    ```

3. 通过cnpm使用

    ```shell
    # 安装工具
    npm install -g cnpm --registry=https//registry.npm.taobao.org

    # 安装之后，就可以使用cnpm命令进行安装，默认就会使用国内镜像
    cnpm install [module]
    ```

## 2. 模块依赖

模块依赖分两种情况

* 开发时依赖的模块，一般来说是测试模块、代码风格检测等，例如mocha，eslint
* 部署应用时所依赖的模块，比如说使用koa框架，那么依赖肯定是koa

在安装模块时，可以通过加选项来指定模块的分类。

1. 开发时依赖

    ```shell
    npm install module --save-dev
    ```

2. 部署时依赖

    ```shell
    npm install module --save
    ```