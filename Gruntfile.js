/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		// Task configuration.
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				globals: {}
			},
			gruntfile: {
				src: 'Gruntfile.js'
			},
			lib_test: {
				src: ['lib/**/*.js', 'test/**/*.js']
			}
		},

		nodeunit: {
			files: ['test/**/*_test.js']
		},

		watch: {
			gruntfile: {
				files: '<%= jshint.gruntfile.src %>',
				tasks: ['jshint:gruntfile']
			},
			lib_test: {
				files: '<%= jshint.lib_test.src %>',
				tasks: ['jshint:lib_test', 'nodeunit']
			}
		},

		"local-googlefont": {
			lato: {
				options: {
					family: "Lato",
					sizes: [
						300,400,700,900
					],
					cssDestination: "./downloads/styles/lato/",
					fontDestination: "./downloads/fonts/lato/"
				}
			},

			source_sans_pro: {
				options: {
					family: "Source Sans Pro",
					sizes: [
						400,700
					],
					cssDestination: "./downloads/styles/source_sans_pro/",
					fontDestination: "./downloads/fonts/source_sans_pro/"
				}
			}
		}

		
	});

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-local-googlefont');

	// Default task.
	grunt.registerTask('default', ['jshint', 'nodeunit']);

};
