'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/**/*_test.js'],
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      static: {
        files: ['static/**/*'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: ['static/sass/**/*'],
        tasks: ['compass'],
        options: {
          livereload: true
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: "static/sass",
          cssDir: "static/css",
          imagesDir: "static/img/sp",
          httpPath: "/",
        }
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task.
  grunt.registerTask('default', ['compass']);

};
