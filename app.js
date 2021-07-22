const express = require('express');
const mongoose = require('mongoose');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();


const port = process.env.PORT || 3000;

const dbURI = 'mongodb+srv://codex_r:9024676745Rp@firstapp.i8au0.mongodb.net/node?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((result)=> app.listen(port))
  .catch((err)=> console.log(err));


app.set('view engine', 'ejs');
// app.set('views,'myviews');

//middleware
app.use(express.static('public')); 
app.use(express.urlencoded({extended: true}));

//HOME
app.get('/', (req,res)=>{
  res.redirect('/reviews');
});

//ABOUT
app.get('/about', (req,res)=>{

    res.render('about',{ title: 'About'});

});
//blogs
app.use('/reviews',reviewRoutes);

//ERROR PAGE
app.use((req, res) => {
  res.status(404).render('error', { title: '404' });
});