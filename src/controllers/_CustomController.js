var express = require('express');

var _CustomController = {

    index: function (req, res, next) {
        console.log("*");
        res.render('admin', {
            layout: 'admin',
            app: "_CustomController needs to be manually added"
        });
    }
};

module.exports = _CustomController;
