module.exports = (grunt) ->
	grunt.initConfig
		browserify:
			src:
				files: [
					expand: true
					cwd: "src"
					src: ["**/*.js"]
					dest: "dist"
					ext: ".js"
				]
		copy:
			src:
				files:  [
					expand: true
					cwd: "src"
					src: ["**/*", "!**/*.js"]
					dest: "dist"
				]
		clean:
			dist: ["dist/**/*"]


	grunt.loadNpmTasks "grunt-browserify"
	grunt.loadNpmTasks "grunt-contrib-copy"
	grunt.loadNpmTasks "grunt-contrib-clean"

	grunt.registerTask "default", ["clean:dist", "browserify:src", "copy:src"]

	return