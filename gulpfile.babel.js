import gulp from 'gulp'
import named from 'vinyl-named'
import webpack from 'webpack-stream'

import connect from 'gulp-connect'

gulp.task('webpack', done => {
  gulp.src('./public/app/app.js')
    .pipe(named())
    .pipe(webpack({
      config: require('./webpack.config.js')
    }))
    .pipe(gulp.dest('public/dist'))

  done()
})

gulp.task('connect', done => {
  done()

  connect.server({
    root: 'public',
    port: 5000
  })
})

gulp.task('watch', done => {
  done()
})

gulp.task('default', gulp.series('webpack', 'connect'))
