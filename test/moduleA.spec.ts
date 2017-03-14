///<reference path="../typings/index.d.ts"/>
///<reference path="../src/moduleA.ts"/>

describe('moduleA Method Test Suite', () => {
    it('Testing getSomeInterface method', () => {
        debugger;
        expect(Some.Thing.Whatever.getSomeInterface().prop).toBe(5);
    });

    it('Testing getSomeObject method', () => {
        debugger;
        expect(Some.Thing.Whatever.getSomeObject().prop).toBe(9);
    });
});