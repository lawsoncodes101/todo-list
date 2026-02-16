const todoProto = {
    toggle() {
        this.hasCompleted = !this.hasCompleted;
    },
};

function createTodo(title, priority, dueDate) {
    const todo = Object.create(todoProto);
    const date = new Date(dueDate);

    todo.id = crypto.randomUUID();
    todo.title = title;
    todo.priority = priority;
    todo.dueDate = date.toLocaleDateString();
    todo.description = "";
    todo.hasCompleted = false;
    todo.project = "none";

    return todo;
};

export { createTodo };
