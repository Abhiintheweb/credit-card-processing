const NodeStorage = require( "node-cache" );
const card = new NodeStorage();

const {luhanCheck} =  require( "../../utils/luhan" );

const getCardDetails = async () => {
    const data  = []
    card.keys().map((i)=>data.push(card.get(i)))
    return data;
}

const addCardDetails = async(ctx) =>{

    const {cardNumber} = ctx.request.body;
    const cardIsValid = luhanCheck(cardNumber);
    if (cardIsValid){
        card.set(cardNumber, ctx.request.body)
    }else{
        throw new Error('Invalid Card Number');
    }
    console.log(card.get(cardNumber))
    return card.get(cardNumber);
}

module.exports = {getCardDetails, addCardDetails}