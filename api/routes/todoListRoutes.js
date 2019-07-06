module.exports = app => {
    const todoList = require('./../controllers/todoListController');

    app.route('/task')
        .get(todoList.listAllTasks)
        .post(todoList.createTask);
    
    app.route('/tasks/:taskId')
        .get(todoList.readTask)
        .put(todoList.updateTask)
        .delete(todoList.deleteTask);
};