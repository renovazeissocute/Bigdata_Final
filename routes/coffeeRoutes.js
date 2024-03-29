const express = require('express');
const coffeeController = require('../controllers/coffeeController');

const router = express.Router();

router.get('/create', coffeeController.coffee_create_get);
router.get('/', coffeeController.coffee_index);
router.post('/', coffeeController.coffee_create_post);
router.get('/:id', coffeeController.coffee_details);
router.get('/update/:id', coffeeController.coffee_update_get);
router.post('/update/:id', coffeeController.coffee_update_post);
router.delete('/:id', coffeeController.coffee_delete);

module.exports = router;