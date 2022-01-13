// Import the js file to test
import { checkForValidUrl } from "../src/client/js/checkForValidUrl"
  
describe("Testing checkForValidUrl invalid url", () => {
    test("Testing the checkForValidUrl() function", () => {

        var input = "www.google.com";
        var output = false;
        expect(checkForValidUrl(input)).toEqual(output)

    })
});

describe("Testing checkForValidUrl valid url", () => {
    test("Testing the checkForValidUrl() function", () => {

        var input = "http://www.google.com";
        var output = true;
        expect(checkForValidUrl(input)).toEqual(output)

    })
});
