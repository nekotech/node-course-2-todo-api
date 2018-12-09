var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    trim: true,
    required: true,
    minLength: 1
  }
});

// var user = new User({
//   email: 'foo@bar.com'
// });
//
// user.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save user', e);
// });

module.exports = {User};
