module.exports = function(grunt) {

  //Initializing the configuration object
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    // less to css 
    less: {
      root: {
        options: {
          compress:false
        },
        files: {
          'css/main.css' : 'less/main.less'
        }
      }
    },
    
 
    
    // all js files are concat in the root level structure 
    concat: {
      options:{
        stripBanners:false,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */',
      },
      root_bootstrap: {
        src: ['./bower_components/bootstrap/js/transition.js',
          './bower_components/bootstrap/js/alert.js',
          './bower_components/bootstrap/js/button.js',
          './bower_components/bootstrap/js/carousel.js',
          './bower_components/bootstrap/js/collapse.js',
          './bower_components/bootstrap/js/dropdown.js',
          './bower_components/bootstrap/js/modal.js',
          './bower_components/bootstrap/js/tooltip.js',
          './bower_components/bootstrap/js/popover.js',
          './bower_components/bootstrap/js/scrollspy.js',
          './bower_components/bootstrap/js/tab.js',
          './bower_components/bootstrap/js/affix.js'],
        dest: 'scripts/at-bootstrap.js'
      },
      root_frontend:{
          src: ['libs/menu/materialMenu.js'],
          dest: 'scripts/at-fe.js'
      },

      root_angular: {//I had list each angular lib, the order of concat this file is very important 
        src:['libs/angular/angular.js', 'libs/angular/angular-route.js',
             'libs/angular/angular-animate.js', 'libs/angular/angular-storage.js',
             'libs/angular/angular-ui-router.js','libs/angular/angular-ui-utils.js'
          ],
        dest: 'scripts/at-angular.js'
      },
      root_andrew: {
        src:['js/**/*.js'],
        dest: 'scripts/at-app.js'
      }
    },
    
 

    // jshint to check javascript files
    // watch tasks
    watch: {
      root_bootstrap:{
        files:['./bower_components/bootstrap/js/transition.js',
          './bower_components/bootstrap/js/alert.js',
          './bower_components/bootstrap/js/button.js',
          './bower_components/bootstrap/js/carousel.js',
          './bower_components/bootstrap/js/collapse.js',
          './bower_components/bootstrap/js/dropdown.js',
          './bower_components/bootstrap/js/modal.js',
          './bower_components/bootstrap/js/tooltip.js',
          './bower_components/bootstrap/js/popover.js',
          './bower_components/bootstrap/js/scrollspy.js',
          './bower_components/bootstrap/js/tab.js',
          './bower_components/bootstrap/js/affix.js'],
        tasks:['concat:bootstrap'],
        options:{
          livereload: true
        }
      },

      root_frontend:{
        files:[ 'libs/light-slider/lightslider.js'],
        options:{
          livereload: true
        }
      },
      root_angular: {
        files:['libs/angular/angular.js', 'libs/angular/angular-route.js',
             'libs/angular/angular-animate.js', 'libs/angular/angular-storage.js',
             'libs/angular/angular-ui-router.js','libs/angular/angular-ui-utils.js'],
        tasks:['concat:angular'],
        options:{
          livereload: true
        }
      },
      root_andrew:{
        files:['js/**/*.js'],
        tasks:['concat:root_andrew'],
        options:{
          livereload: true
        }
      },
      less:{
        files:['less/**/*.less'],
        tasks:['less'],
        options:{
          livereload: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-less');
//   grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
//   grunt.loadNpmTasks('grunt-contrib-copy');
//   grunt.loadNpmTasks('grunt-contrib-jshint');
//   grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['less','concat', 'watch']);
//   grunt.registerTask('prod', ['less','copy','cssmin','concat','uglify']);
};