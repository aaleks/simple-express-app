var express = require('express');

var AdminController = {

    /* / for all  */
    index: function (req, res, next) {
        console.log("*");
        res.render('admin', {
            layout: 'admin',
            app: "api index function AdminController"
        });
    },

    testing: function (req, res, next) {
        console.log("*");
        res.render('admin', {
            app: "api testing function AdminController"
        })
    }


};

module.exports = AdminController;
