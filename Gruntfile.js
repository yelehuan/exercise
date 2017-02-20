module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			target: {
			    src: ['dist']
			}
        },

		uglify: {
			options: {
				banner: '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},

			buildjs: {
				files: [{
					expand: true,
					cwd: 'js',
					src: '**/*.js',
					dest: 'dist/js'
				}]
			},

			buildlib: {
				files: [{
					expand: true,
					cwd: 'lib',
					src: '**/*.js',
					dest: 'dist/lib'
				}]
			}
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'css',
					src: '**/*.css',
					dest: 'dist/css'
				}]
			}
		},

		jade: {
			compile: {
				options: {
					data: {
						debug: false
					}
				},
				files: {
					'dist/index.html': 'views/test.jade',
				}
			}
		},

		inline: {
			demo: {
				files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['**/*.{html,css}'],
                    dest: 'dist'
                }]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-inline');
	
	grunt.registerTask('default', ['clean', 'uglify','cssmin', 'jade', 'inline']);
}
