const router = require('express').Router();
let User = require('./models/user.model');

router.route('/').get((req, res) => {
   User.find() // Mongoose method: gets data
      .then(users => res.json(users)) // res.json: returns in json format from database
      .catch(err => res.status(400).json('Error: ' + err)); //error message
   
});

router.route('/add').post((req, res) => {
   const username = req.body.username; 
   const newUser = new User({username});

   newUser.save() //Saved to MongoDB database
      .then(() => res.json('User added!')) 
      .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router; //exporting the router