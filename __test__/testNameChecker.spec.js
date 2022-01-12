// Import the js file to test
import { checkForName } from "../src/client/js/nameChecker"
  
describe("Testing checkForName name not found functionality", () => {
    test("Testing the checkForName() function", () => {

        var input = "TestString";
        var output = false;
        expect(checkForName(input)).toEqual(output)

    })
});

describe("Testing checkForName successful name match functionality", () => {
    test("Testing the checkForName() function", () => {

        var input = "Picard";
        var output = true;
        expect(checkForName(input)).toEqual(output)

    })
});
