module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/polymer-markdown-tag'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/polymer-markdown-tag/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        },
        'replace': {
            example: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            }
        },
        'browserify': {
          scripts: {
            files: [{
              expand: true,
              cwd: "src",
              src: ["**.js"],
              dest: "dist",
              ext: ".js"
            }]
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks("grunt-browserify");

    grunt.registerTask('build',  ['browserify:scripts', 'replace']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);

};
