'use strict';

module.exports = function(grunt) {
    // Load in all the grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var PSYKICK_FILES = [
        'core',
        'keys',
        'helper',
        'component',
        'entity',
        'layer',
        'system',
        '*-system',
        'physics',
        'components/**/*',
        'systems/**/*'
    ];

    // Make sure all of the Psykick files come from the correct folder
    for (var i = 0, len = PSYKICK_FILES.length; i < len; i++) {
        PSYKICK_FILES[i] = 'client/psykick/js/engine/' + PSYKICK_FILES[i] + '.js';
    }
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: ['**/node_modules/', 'client/**/*.min.js']
            },
            all: {
                files: {
                    src: ['client/js/**/*.js', 'server/**/*.js']
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            psykick: {
                files: {
                    'client/js/vendor/psykick.min.js': PSYKICK_FILES
                }
            }
        }
    });

    grunt.registerTask('build', ['uglify:psykick']);
};