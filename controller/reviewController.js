// review_index, review_details, review_add_form, review_add_submit, review_delete

const Review = require('../models/review');

const review_index = (req,res) => {
    Review.find().sort({createdAt: -1})
      .then((result)=>{
        res.render('reviews/index',{ title: 'Reviews', reviews: result});
      })
      .catch(err => console.log(err));
};

const review_details = (req,res) => {
    const id = req.params.id;
    Review.findById(id)
       .then((result)=>{
         res.render('reviews/details', {title: 'Review Details', review : result })
       })
       .catch((err)=>{
         console.log(err);
       })
};

const review_add_form = (req,res) => {
    res.render('reviews/create', { title: 'Write a new review' });
};

const review_add_submit = (req,res) => {
    const review = new Review(req.body);
    review.save()
      .then((result)=>{
        res.redirect('/reviews');
      })
      .catch((err)=>{
        console.log(err);
      })
};

const review_delete = (req,res) => {
    const id = req.params.id;
    Review.findByIdAndDelete(id)
      .then((result)=>{
        res.json({redirect: '/reviews'})
      })
      .catch((err)=>{
        console.log(err);
      })
};

module.exports = {
    review_index,
    review_details,
    review_add_form,
    review_add_submit,
    review_delete
}