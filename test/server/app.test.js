var request = require('supertest');
var superagent = require('superagent');
var assert = require('chai').assert;
var expect = require("chai").expect;


var httpMocks = require('node-mocks-http'), // quickly sets up REQUEST and RESPONSE to be passed into Express Middleware
    requests = {}, // define REQUEST
    responses = {} // define RESPONSE
    ;

describe('loading express', function () {
    var server;

    beforeEach(function () {
        console.log("dsddsfsd");

        delete require.cache[require.resolve('./../../server')];
        console.log("aft");

        server = require('./../../server');
        console.log("dfd");
    });

    afterEach(function (done) {
        console.log("xxxxdfd");

        server.close(done);
    });

    it('responds to /admin', function testSlash(done) {
        request(server)
            .get('/api/admin')
            .expect(200, done);
    });

    it('404 everything else', function testPath(done) {
        console.log('test 404')
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });

    it('post', function testPath(done) {
        console.log('test 404')
        request(server)
            .get('/foo/bar')
            .expect(404, done);
    });


    it('post object', function (done) {
        superagent.get('http://localhost:3000/api/admin')
            .send({
                name: 'name'
                , email: 'email'
            })
            .end(function (e, res) {
                console.log(res.status);
                assert(res.status == 200, 'bad response 200 is not' + res.status);
                done()
            })
    })

});
