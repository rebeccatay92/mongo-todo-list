const url = 'mongodb://localhost:27017/mongoToDo'
const mongoose = require('mongoose')
const Todo = require('../models/Todo')

mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise

// console.log(Todo)

function create (params) {
  var newToDo = new Todo({
    name: params.name,
    description: params.description,
    completed: params.completed
  })

  newToDo.save(function (err, data) {
    if (err) throw err
    console.log(data)
  })
}
// run by typing create testing description false in yarn test index.js
// error! typing a string into completed field makes completed true instead of throwing error
// tested: if only name is given, rest are blank

function list () {
  // console log the list of all TODOs
  Todo.find({}, function (err, document) {
    if (err) throw err
    console.log(document)
  })
}

function show (id) {
  // find the TODO with this id and console log it
  Todo.find({_id: id}, function (err, document) {
    if (err) throw err
    console.log(document)
  })
}

function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
  var qObj = {
    _id: id
  }
  var updObj = {
    name: params.name
  }
  if (params.description) {
    updObj.description = params.description
  }
  if (params.completed) {
    updObj.completed = params.completed
  }
  Todo.update(qObj, updObj, function (err, document) {
    if (err) throw err
    console.log(document)
  })
}

function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
  var qObj = {
    _id: id
  }
  Todo.remove(qObj, function (err, document) {
    if (err) {
      console.log('failure')
      throw err
    }
    console.log('success')
  })
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
}
