const {createMockContext} = require('@shopify/jest-koa-mocks');
const NodeStorage = require( "node-cache" );
const {getAllCards} = require('../../src/controllers/cards/getCardDetails');
const cardService = require('../../src/services/cards/cardService');
const card = new NodeStorage();

const MockedResponse = [{
    "cardNumber": "4716721754825410",
    "name": "test",
    "limit": 29,
    "balance": 0
}]
describe('When getCard is called',()=>{
    let ctx = createMockContext();
    beforeAll(async()=>{
        ctx.request.body = {
            "cardNumber":"4716721754825410",
            "name":"test",
            "limit":29
        }
        await cardService.addCardDetails(ctx);
    });

    it('Should return success', async()=>{
        await getAllCards(ctx);
        expect(ctx.status).toEqual(200);
        expect(ctx.body).toEqual({data: MockedResponse});
    });

});