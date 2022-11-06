

const {addNewCardDetails} = require('../../src/controllers/cards/createCard');

describe('When createCard is called',()=>{
    let ctx = {};

    let mockCardService = jest.fn()

    it('Should return success',async()=>{
        ctx.body = {
            "cardNumber":"4716721754825410",
            "name":"test",
            "limit":29
        }


        const response = await addNewCardDetails(ctx);
        console.log(response,"=========");
        expect(response.data).toBe({});
   

    });


});