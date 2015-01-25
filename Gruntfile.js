'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		browserify: {
			foo: {
				options: {
					transform: ['browserify-ngannotate']
				},
				files: {
					'build/bundle.js': 'src/a.js'
				}
			}
		}
	});
};
