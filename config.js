({
    baseUrl: 'src',
    name: '../vendor/almond',
    include: ['terminal'],

    out: 'build/terminal.js',
   	
   	wrap: {
        start: "(function(exports) {",
        end: "exports.terminal = require('terminal');\n})(window);"
    },

    optimize: 'uglify'
})