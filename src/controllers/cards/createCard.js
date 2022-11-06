const {addCardDetails} = require('../../services/cards/cardService')

const addNewCardDetails = async(ctx)=>{

    try {
        const cardDetails = await addCardDetails(ctx)
        ctx.body = cardDetails;
        ctx.status = 200;
    } catch (error) {
        ctx.body = {'message': error.message};
        ctx.status = 400;
    }

   
}


module.exports = {addNewCardDetails}