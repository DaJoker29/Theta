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
            sass: {
                files: ['sass/**/*.scss', '**/*.html'],
                tasks: ['compass'],
                options: {
                    livereload: true,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'watch']);
};
