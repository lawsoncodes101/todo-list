const taskProto = {
    toggle() {
        this.hasCompleted = !this.hasCompleted;
    },
};

function createTask(title, priority, dueDate) {
    const task = Object.create(taskProto);
    const date = new Date(dueDate);

    task.id = crypto.randomUUID();
    task.title = title;
    task.priority = priority;
    task.dueDate = date.toLocaleDateString();
    task.description = "";
    task.hasCompleted = false;
    task.project = "none";

    return task;
}

export { createTask };
