import { getInput } from "../src/server/index"
const app = require("../src/server/index");

describe ("test the server", () => {

    // test("Test getNews", () => {        
    //     var titleText = "Test";
    //     var data; 
    //     return getInput(titleText, request)
    //         .then(data => {        
    //              expect(data).not.toBeNull();
    //     });
    // });

    
    test("/getNews rout", async () => {
        const res = await app.get("/getNews")
        .expect("Content-Type", /json/)
        expect(res.status).toBe(200)
        expect(res.body).not.toBeNull();
    });

});

