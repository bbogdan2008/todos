const mongoose = require('mongoose');

const Todo = require('../models/todo');

exports.todos_get_all = (req, res, next) => {
    Todo.find()
        .select('_id text')
        .exec()
        .then(todoList => {
            const response = {
                count: todoList.length,
                todos: todoList.map(todo => {
                    return {
                        _id: todo._id,
                        text: todo.text
                    }
                })
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.todos_create = (req, res, next) => {
    console.log(req);
    console.log(res);
    console.log(req.body.text);
    const todo = new Todo({
        _id: new mongoose.Types.ObjectId(),
        text: req.body.text
    });

    todo
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created Todo successfully',
                createdTodo: {
                    text: result.text,
                    _id: result._id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
}

exports.todos_get_todo = (req, res, next) => {
    const id = req.params.todoId;
    Todo.findById(id)
      .select('_id text')
      .exec()
      .then(todo => {
        console.log("From database", todo);
        if (todo) {
          res.status(200).json(todo);
        } else {
          res.status(404).json({ message: 'No todo found for provided ID' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  }