const browserSync = require('browser-sync');
const { startServer } = require('./src/app');

startServer().then((emitter) => {
  emitter.on('portFound', (port) => {
    browserSync({
      proxy: `localhost:${port}`,
      files: ['src/views/**/*.njk', 'src/public/**/*.*'],
      notify: false,
      port: port + 1  // BrowserSync will run on the next port
    });
  });
}); 