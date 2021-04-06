const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const userSchema = new Schema({
   username: {
      type: String,
      required: true,
      unique: true,
      trim: true, // trim white space
      minlength: 6 //minimum length
   },
}, {
   timestamps: true,
});
const User = mongoose.model('User', userSchema);
module.exports = User;