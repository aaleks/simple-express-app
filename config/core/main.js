var requireDir = require('require-dir');
var path = require('path');
var routes = require('../routes');
var middlewares = require('../middlewares').middlewares;
var express = require('express');


module.exports = {


    registerAPIRoutes: function (app, pathRoutes) {
        /* GET home page. */
        //use the router api 
        var routerapi = express.Router();
        var dir = requireDir(pathRoutes);

        //list every controllers in folder
        Object.keys(dir).forEach(function (item) {
            var controllerName = (item.substring(0, item.length - 10)).toLowerCase();

            //current controller functions
            var current = dir[item];
            if (item.charAt(0) != "_") {

                //list every function in the current controller
                Object.keys(current).forEach(function (item) {
                    var baseapi = "/" + controllerName + "/";
                    if (item != "index") {
                        console.log("base API  " + (baseapi + item));
                        routerapi.all(baseapi + item, current[item]);
                    } else {
                        console.log("base API  " + baseapi);
                        routerapi.all(baseapi, current[item]);
                    }
                });
            }
        });
        //new routes for /api
        app.use(routes.prefix, routerapi);
    },

    registerCustomRoutes: function (app, pathRoutes) {
        var dir = requireDir(pathRoutes);
        var allcustomroutes = routes.customroutes;

        Object.keys(allcustomroutes).forEach(function (item) {

            var configs = allcustomroutes[item].split(".");
            var configs_req_type = item.split(" ");
            /* function to call */
            var route = configs_req_type[1];
            var type_req = configs_req_type[0];

            /* function to call */
            var controller = configs[0];
            var controlle_function = configs[1];

            var current = dir[controller];
            console.log(current[controlle_function]);

            switch (type_req) {
                case "get":
                    app.get(route, current[controlle_function]);
                    break;
                case "post":
                    app.post(route, current[controlle_function]);
                    break;
                case "all":
                    app.all(route, current[controlle_function]);
                default:
                    break;
            }
        })
        /*
         registerMiddlewares: function (app, pathRoutes) {
         var dir = requireDir(pathRoutes);

         console.log(JSON.stringify(middlewares))
         Object.keys(middlewares).forEach(function (item) {
         var currentKey = item;
         console.log("crt " + currentKey);

         //every keys in middelware define
         if(currentKey=="*"){
         middlewares[currentKey].forEach(function(entry) {
         console.log("dir " + JSON.stringify(dir));

         console.log("entr " + JSON.stringify(dir[entry]));

         app.use('/custom',dir[entry] );

         });
         Object.keys(currentKey).forEach(function (item) {
         app.use(item, dir[item]);
         }

         var current = dir[item];
         Object.keys(dir).forEach(function (item) {
         console.log("key" + item);
         app.use('/' + item, dir[item]);
         });

         });
         },
         */

    }
}

