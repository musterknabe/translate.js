module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    copy: {
      main: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'build/'
      },
    },

    uglify: {
      options: {
        mangle: true,
        banner: '' +
          '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.homepage ? " *  " + pkg.homepage + "\\n" : "" %>' +
          ' *  Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
          ' *  Licensed under <%= pkg.license %> license\n' + 
          ' */\n',
      },
      default: {
        files: {
          'build/translate.min.js': ['build/translate.js']
        }
      }
    },

    jshint: {
      options: {
        "curly": true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": true,
        "expr": true,
        "globals": {
          
        }
      },

      all: ['src/*.js', 'test/**/*.js']
    },

    jasmine: {
      build: {
        src: [
          'build/translate.min.js',
        ],
        options: {
          specs: 'spec/*Spec.js',
        }
      },

      test: {
        src: [
          'src/*.js',
        ],
        options: {
          specs: 'spec/*Spec.js',
        }
      }
    },

    watch: {
      scripts: {
        files: ['src/**/*'],
        tasks: ['test']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['copy', 'uglify', 'jasmine:build']);
  grunt.registerTask('test', ['jshint', 'jasmine:test']);
};