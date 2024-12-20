const browserSync = require('browser-sync');

browserSync({
  proxy: 'localhost:3000',
  files: ['src/**/*.{js,njk,css}'],
  open: true,
  notify: false,
  ui: false,
  port: 3001
}); 