const NodeStorage = require( "node-cache" );
const card = new NodeStorage();

const {luhanCheck} =  require( "../../utils/luhan" );

const getCardDetails = async () => {
    const data  = []
    card.keys().map((i)=>data.push(card.get(i)))
    return data;
}

const addCardDetails = async(ctx) =>{

    const {cardNumber, name, limit} = ctx.request.body;

    if(!name){
        throw new Error('Name is required.');
    };
    if (!limit){
        throw new Error('Limit is required.');
    }

    const cardIsValid = luhanCheck(cardNumber);
    if(cardIsValid && card.get(cardNumber)){
        throw new Error('Card is already registred.');
    }

    if (cardIsValid){
        ctx.request.body.balance = 0;
        card.set(cardNumber, ctx.request.body);
    }else{
        throw new Error('Invalid Card Number');
    }
    return card.get(cardNumber);
}

module.exports = {getCardDetails, addCardDetails}