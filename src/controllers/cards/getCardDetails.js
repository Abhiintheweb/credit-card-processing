const {getCardDetails} = require('../../services/cards/cardService')

const getAllCards = async(ctx)=>{

    try {
        const cardDetails = await getCardDetails()
        ctx.body = cardDetails;
        ctx.status = 200;
    } catch (error) {
        ctx.body = {'message': error.message};
        ctx.status = 400;
    }

   
}


module.exports = {getAllCards}