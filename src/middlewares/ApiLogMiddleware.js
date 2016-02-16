//usage
//var logMatchingUrls = require('./src/middlewares/logMatchingUrls');
//app.use(logMatchingUrls(/\.css$/i));

module.exports = function (req, res, next) {
        console.log('req url api ');
        next();

    };

/*
module.exports = {
    LogMatchingUrls :function (req, res, next) {
            console.log('req url');

            if (pattern.test(req.url)) {
                //console.log('request url', req.url);
                console.log('request url');
            }
            next();

        }
    ,
    logs : function (pattern) {

        // cosole.log(pattern);
        console.log('HELLO');

        return function (req, res, next) {
            console.log('req url');

            if (pattern.test(req.url)) {
                //console.log('request url', req.url);
                console.log('request url');
            }
            next();

        }
    }
}
*/