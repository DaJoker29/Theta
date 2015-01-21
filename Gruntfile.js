module.exports = function(grunt) {
    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'mockup/stylesheets',
                    environment: 'dev'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['sass/**/*.scss', '**/*.html'],
                tasks: ['compass'],
            },
            js: {
                files: ['js/**/*.js'],
                tasks: ['js-build'],
            }
        },
        concat: {
            dev: {
                src: ['js/**/*.js'],
                dest: 'mockup/script.js'                
            }
        },
        jshint: {
            options: {
                globals: {
                    jQuery: true
                },
            },
            before: ['js/**/*.js'],
            after: ['mockup/script.js']
        },
        uglify: {
            dev: {
                files: {
                    'mockup/script.min.js': 'mockup/script.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('js-build', ['jshint:before', 'concat', 'jshint:after', 'uglify']);
    grunt.registerTask('build', [ 'js-build', 'compass']);
    grunt.registerTask('default', ['build', 'watch']);
};
