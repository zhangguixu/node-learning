// 简单地配置

module.exports = {
    devtool : "source-map",
    module : {
        loaders : [
            { 
                test : /\.vue$/,
                loader : "vue"
            }
        ]
    }    
};