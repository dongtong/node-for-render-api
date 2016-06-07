var gulp = require('gulp');
var eslint = require('gulp-eslint');

var src = {
	jsFiles: [
		'routes/**/*.js', 
		'libs/*.js'
	]
};

gulp.task('jshint', function () {
	return gulp.src(src.jsFiles)
	           .pipe(jshint())
	           .pipe(jshint.reporter(stylish, {
	           		verbose: true
	           	}))
	           .pipe(jshint.reporter('fail'))
	           .pipe(jscs())
	           .pipe(jscs.reporter())
	           .pipe(jscs.reporter('fail'));
});

gulp.task('eslint', function () {
	return gulp.src(src.jsFiles)
			   // eslint() attaches the lint output to the "eslint" property 
               // of the file object so it can be used by other modules. 
	           .pipe(eslint())
	           // eslint.format() outputs the lint results to the console. 
               // Alternatively use eslint.formatEach() (see Docs). 
	           .pipe(eslint.format())
	           // To have the process exit with an error code (1) on 
               // lint error, return the stream and pipe to failAfterError last.
	           .pipe(eslint.failAfterError());
});