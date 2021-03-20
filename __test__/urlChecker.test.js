import { TestScheduler } from '@jest/core';
import { isValidUrl } from './../src/client/js/urlChecker';

describe("test for valid URL input", () => {
    // The test 
    it('returns false', () => {
        expect(isValidUrl("Hello")).toBeFalsy();
    });

    it('returns false', () => {
        expect(isValidUrl("www.string")).toBeFalsy();
    });

    it('returns true', () => {
        expect(isValidUrl('https://www.amc.info/en-gb/')).toBeTruthy()
    })

});

