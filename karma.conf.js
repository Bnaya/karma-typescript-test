module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: ["./test/**/*.spec.ts", "./src/**/*.ts"],
        reporters: ["progress", "karma-typescript", 'coverage'],
        browsers: ["Chrome"],
        singleRun: true,
        mime: {
            'text/x-typescript': ['ts']
        },
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        }
    });
};