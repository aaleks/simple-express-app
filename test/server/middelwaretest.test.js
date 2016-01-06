var expect = require('chai').expect;
var httpMocks = require('node-mocks-http'), // quickly sets up REQUEST and RESPONSE to be passed into Express Middleware
    request = {}, // define REQUEST
    response = {} // define RESPONSE
    ;

var sinon = require('sinon');

//the middelware we want to test
var middleware = require('./../../src/middleware/logMatchingUrls')

describe('my middleware', function () {

    describe('request handler creation', function () {
        var mw;

        beforeEach(function (done) {
            mw = middleware(/\.css$/i);
            /* 
             * before each test, reset the REQUEST and RESPONSE variables 
             * to be send into the middle ware
             **/
            request = httpMocks.createRequest({
                method: 'GET',
                url: '/css/main.css',
                query: {
                    myid: '312'
                }
            });
            response = httpMocks.createResponse();
            done();

        });

        it('should return a function()', function () {
            expect(mw).to.be.a.Function;

        });

        it('should accept three arguments', function () {
            expect(mw.length).to.equal(3);
        });
    });

    describe('request handler calling', function () {
        it('should call next() once', function () {
            var mw = middleware(/\.css$/i);
            var nextSpy = sinon.spy();

            mw(request, response, nextSpy);
            expect(nextSpy.calledOnce).to.be.true;
            //expect(request).to.have.property('didSomething',true);

        });
    });

    describe('pattern testing', function () {
        console.log("desciption of the testing");
    });

});