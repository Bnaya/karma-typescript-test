///<reference path="../typings/index.d.ts"/>

// why doesn't it recognize the line below and compile it properly?!?!
///<reference path="../src/moduleA.ts"/>

// I dont want to use a third-party module bundler.
// all I want is the Karma-Typescript package to compile and run the tests.

describe('moduleA Method Test Suite', () => {
    it('Testing subtract method', () => {
        expect(some.thing.stupid.Whatever.subtract(3,2)).toBe(1);
    });
});