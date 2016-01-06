var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
 
// Task
gulp.task('default', function() {
	// listen for changes
	livereload({ start: true }); 
	livereload.listen();
	// configure nodemon
	nodemon({ 
		// the script to run the app
		script: 'server.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('server.js')
			.pipe(livereload());
	})
})