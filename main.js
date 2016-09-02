define(["./configs/routes"], function(routes) {
    var app = Drv.App(); // or Drv.App({your-configs ...});
    app.run(routes);
});