module.exports = function(config) {
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        files: ["./test/moduleA.spec.ts", "./src/moduleA.ts"],
        reporters: ["progress", "karma-typescript", 'coverage'],
        browsers: ["Chrome"],
        mime: {
            'text/x-typescript': ['ts']
        },
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        }
    });
};