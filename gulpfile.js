var gulp= require('gulp');
var sass= require('gulp-sass');
var rename = require('gulp-rename');


gulp.task('scss',function(){
	gulp.src('assets/sass/sassstyles.scss')
	.pipe(sass())
	   .pipe(rename('styles.css'))
	.pipe(gulp.dest('assets/css/'));
});


gulp.task('sasswatch', function(){
gulp.watch('assets/sass/sassstyles.scss', ['scss']);
});