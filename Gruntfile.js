module.exports = function (grunt) {

	// Load multiple grunt tasks using globbing patterns
	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Copy the front into the build directory
		copy: {
			theme: {
				expand: true,
				cwd: 'theme/',
				src: ['**/*'],
				dest: 'build/<%= pkg.name %>/',
			},
		},
		// Compress build directory into <name>.zip and <name>-<version>.zip
		compress: {
			theme: {
				options: {
					mode: 'zip',
					archive: './build/<%= pkg.name %>-v<%= pkg.version %>.zip',
				},
				expand: true,
				cwd: 'build/<%= pkg.name %>/',
				src: ['**/*'],
				dest: '<%= pkg.name %>/',
			},
		},
	});

	// Build task(s).
	grunt.registerTask('build', ['copy:theme', 'compress:theme']);
};
