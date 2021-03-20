import { handleSubmit } from './../src/client/js/formHandler';

describe("test for retrieving api data and psuhing it to the view", () => {
    // The test 
    it('returns true', () => {
        expect(handleSubmit).toBeDefined();
    });
});

