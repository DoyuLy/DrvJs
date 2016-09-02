define([], function() {
    var app    = Drv.getApp();   // 获取 App 单例对象    
    var router = app.router;     // router.getRoute(), router.getPath()     
    var params = router.$params; // Vue ViewModel 选项参数

    var vmOptions = {
        el   : "#layout",
        data : {
            id : params[0],
            name : "Drv.js" },
        ready : function() {
            console.log("Vue.$http", this.$http);
        },
        methods : {
            clickDiv : function(e) {
                console.log(e.target);
            }
        }
    };     
    // 渲染视图文件 you-app/views/index.html     
    app.render("index", vmOptions);
});