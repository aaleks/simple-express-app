module.exports = {
    //by 
    prefix: "/api",
    customroutes: {
        'get /admin': 'AdminController.index',
        'get /admin/*': 'AdminController.index',
        'get /test': 'AdminController.testing',
        'get /': 'AdminController.testing',
        'get /custom': '_CustomController.index'
    }
};