# Starter using express #


Starter kit using express to create api quickly.

For the back-end, the structure let you define quickly routes for the app, tests the server components.

### How do I get set up? ###

#### Launch the server    
npm install  
npm start

#### Run tests   
npm test
you can then check the coverage folder to see results

##### Configurations
- Declare new route simply create a class in the src/controller folder
- In the src/controller all functions by default are exposed to the express server with the prefix define in the config/routes.js file

The Controllers with the name beginning by _ (_CustomController class) are private by default to expose declare them in the config/routes.js


### TODO :
- Clean Dependencies
- Implement middelware registration.
- Add Model testing.
- Implement MongoDB
- Implement Examples
- React Integration Examples
- ES6 for the server
