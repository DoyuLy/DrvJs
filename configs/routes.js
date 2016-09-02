define({
    "/" : function() {},     // Director.js 原有的方式
    "/books" : "book/index", // 使用控制器自动加载 you-app/controllers/book/index.js
    "/books/:id" : "book/view",
    "/author" : "author",
    "/about" : "about"
});
