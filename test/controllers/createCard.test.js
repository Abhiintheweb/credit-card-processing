const {createMockContext} = require('@shopify/jest-koa-mocks');
const {addNewCardDetails} = require('../../src/controllers/cards/createCard');
const cardService = require('../../src/services/cards/cardService');
const MockedResponse = {
    "cardNumber": "4716721754825410",
    "name": "test",
    "limit": 29,
    "balance": 0
}
describe('When createCard is called',()=>{
    let ctx = createMockContext();

    beforeEach(()=>{
        ctx.request.body = {
            "cardNumber":"4716721754825410",
            "name":"test",
            "limit":29
        }
    });
    afterEach(()=>{
        jest.clearAllMocks();
    });

    it('Should return success if card number is correct',async()=>{
        jest.spyOn(cardService, 'addCardDetails')
        .mockImplementation(()=>Promise.resolve( MockedResponse ));
        await addNewCardDetails(ctx);
        expect(ctx.status).toEqual(200);
        expect(ctx.body).toEqual({data:MockedResponse});

    });

    it('Should return error if same card is registred',async()=>{
        await addNewCardDetails(ctx);
        expect(ctx.status).toEqual(400);
        expect(ctx.body).toEqual({message:'Card is already registred.'});
    });
});