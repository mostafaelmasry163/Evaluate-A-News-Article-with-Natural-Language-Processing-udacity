import { checkData } from './../src/client/js/dataChecker';

    
describe("Testing the checkdata functionality", () => {
      
    test("Testing the checkData() function", () => {
       
        expect(checkData).toBeDefined();
    })
});