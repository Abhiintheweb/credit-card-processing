const Router = require('@koa/router');
const {healthCheck} = require('../controllers/healthCheck');
const {getAllCards } = require('../controllers/cards/getCardDetails');
const {addNewCardDetails} = require('../controllers/cards/createCard');


const router = new Router();
router.get('/', healthCheck);
router.get('/cards/all-cards', getAllCards);
router.post('/cards/add-card-details', addNewCardDetails);
module.exports = router;