var gulp= require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('watch',function(){
	gulp.watch('*.html',browserSync.reload);
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})
gulp.task('default',function(){
	console.log('hi');
});