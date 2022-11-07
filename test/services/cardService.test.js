const {createMockContext} = require('@shopify/jest-koa-mocks');
// const {addNewCardDetails} = require('../../src/controllers/cards/createCard');
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
       
        const response = await cardService.addCardDetails(ctx);
        expect(response).toEqual(MockedResponse);

    });

    it('Should return error if same card is registred',async()=>{
        try {
            await cardService.addCardDetails(ctx);
        } catch (error) {
            expect(error.message).toEqual('Card is already registred.');
        }
    });
});

describe('When getCard is called',()=>{
    afterEach(()=>{
        jest.clearAllMocks();
    });

    it('Should return success if get detail of all cards',async()=>{
       
        const response = await cardService.getCardDetails();
        expect(response).toEqual([MockedResponse]);

    });
});