const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

//Todo.findOneAndRemove({_id: '5c10a1a9eb8093631ff7dda0'})

Todo.findByIdAndRemove('5c10a1a9eb8093631ff7dda0').then((todo) => {
  console.log(todo);
});
