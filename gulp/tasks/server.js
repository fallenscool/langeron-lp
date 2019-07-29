module.exports = function() {
  const config = {
    server: {
      baseDir: $.path.build
      // directory: true
    }
    // tunnel: true
  };

  $.gulp.task("server", function() {
    $.bs.init(config);
  });
};
