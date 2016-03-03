/* global module:false */
module.exports = function(grunt) {
	// Project configuration
	grunt.initConfig({
		connect: {
			example: {
				port: 1337,
				base: 'src/slides'
			}
		},
		'gh-pages': {
			options: {
				base: 'src/slides'
			},
			src: ['**']
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-gh-pages');

	// Default task
	grunt.registerTask('default', []);
	grunt.registerTask('deploy', ['default', 'gh-pages']);

};