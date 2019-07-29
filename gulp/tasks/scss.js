module.exports = function() {
  const scss = {
    src: $.path.src + "styles/app.scss",
    build: $.path.build + "css"
  };

  $.gulp.task("scss", function() {
    return $.gulp
      .src(scss.src)
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber())
      .pipe($.gp.sass())
      .pipe(
        $.gp.autoprefixer({
          overrideBrowserslist: ["> 0.1%"],
          cascade: false
        })
      )
      .pipe(
        $.gp.cleanCss({
          level: 2
        })
      )
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest(scss.build))
      .pipe(
        $.bs.reload({
          stream: true
        })
      );
  });
};
