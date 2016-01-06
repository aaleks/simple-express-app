//usage
//var logMatchingUrls = require('./src/middlewares/logMatchingUrls');
//app.use(logMatchingUrls(/\.css$/i));

module.exports = function logMatchingUrls(pattern) {

    // console.log(pattern);
    console.log('HELLO');

    return function (req, res, next) {

        if (pattern.test(req.url)) {
            //console.log('request url', req.url);
            console.log('request url');
        }
        next();
    }
}