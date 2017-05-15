module.exports = {
  files: {
    stylesheets: { joinTo: 'css/app.css' },
    javascripts: {
      joinTo: {
        'javascripts/vendor.js': /^(?!app)/,
        'javascripts/app.js': /^app/
      }
    },
  },
  server: {
    hostname: '0.0.0.0',
    port: 3000
  },
  notifications: false,
  plugins: {
    autoReload: {
      forceRepaint: true,
      forcewss: true,
      port: 9485
    },
    babel: {
      presets: ['es2015']
    },
    postcss: {
      processors: [
        require('autoprefixer')(['> 1%', 'last 8 versions', 'ie 9']),
        require('postcss-flexbugs-fixes'),
        require('postcss-flexibility'),
        require('postcss-nested'),
        require('postcss-short'),
        require('postcss-simple-vars'),
        require('postcss-extend'),
        require('postcss-mixins'),
        require('postcss-partial-import'),
        require('postcss-assets')({
          loadPaths: ['app/assets'],
          relativeTo: 'app/css/'
        })
      ]
    }
  }
};