var express = require('express');
var router = express.Router();
const checkAuth = require('../middleware/check-auth');

const TodosController = require('../controllers/todos');

router.get  ('/',                   TodosController.todos_get_all);
router.post ('/',       checkAuth,  TodosController.todos_create);
router.get  ('/:todoId',            TodosController.todos_get_todo);
router.patch('/:todoId',            TodosController.todos_update_todo);
router.delete('/:todoId',           TodosController.todos_delete_todo);

module.exports = router;
