/*!
 * Your Website Gruntfile
 * http://www.yoururlhere.com
 * @author Author Info Here
 */
 
module.exports = function(grunt) {

// load all grunt tasks
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
 
  pkg: grunt.file.readJSON('package.json'),

  /* ==========================================================================
     Set project object
     ========================================================================== */

  project: {
      assets: 'assets',
      js: 'js'
  },

  /* ==========================================================================
     SASS
     ========================================================================== */

  sass: {
      dev: {
        options: {
          style: 'compressed',
          compass: true
        },
        files: {
          'style.css': '<%= project.assets %>/sass/style.scss'
        }
      }
  },

  /* ==========================================================================
     Concatenate JS
     ========================================================================== */

  concat: {
      js : {
         src : [
           '<%= project.assets %>/js/*'
         ],
         dest : '<%= project.js %>/pohl.js'
      }
   },

   /* ==========================================================================
     Minify JS
     ========================================================================== */

   uglify : {
      js: {
         files: {
            '<%= project.js %>/pohl.js' : [ '<%= project.js %>/pohl.js' ]
        }
      }
   },

  /* ==========================================================================
     Watch
     ========================================================================== */

  watch: {
      sass: {
        files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      },
      concat: {
        files: '<%= project.assets %>/js/*',
        tasks: ['concat:js']
      },
      uglify: {
        files: '<%= project.assets %>/js/*',
        tasks: ['uglify:js']
      }
  } 

});

/* ==========================================================================
   Default task Run `grunt` on the command line
   ========================================================================== */
     
grunt.registerTask('default',['sass:dev','watch']);
 
};