const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewController');


router.get('/add', reviewController.review_add_form); 
router.get('/', reviewController.review_index);  
router.post('/', reviewController.review_add_submit);
router.get('/:id', reviewController.review_details);
router.delete('/:id', reviewController.review_delete);


module.exports = router;