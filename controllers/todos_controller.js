const url = 'mongodb://localhost:27017/mongoToDo'
const mongoose = require('mongoose')

mongoose.connect(url, {
  useMongoClient: true
})
mongoose.Promise = global.Promise
const Todo = require('../models/Todo.js')


function create (params) {
  // create a new TODO and console log the response
}
function list () {
  // console log the list of all TODOs
}
function show (id) {
  // find the TODO with this id and console log it
}
function update (id, params) {
  // find the TODO with this id and update it's params. console log the result.
}
function destroy (id) {
  // find the TODO with this id and destroy it. console log success/failure.
}

module.exports = {
  create,
  list,
  show,
  update,
  destroy
}
