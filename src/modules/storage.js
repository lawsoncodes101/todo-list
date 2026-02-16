let todoLibrary = JSON.parse(localStorage.getItem("todoLibrary")) || [];
let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary")) || [];

function addTodo(todo) {
    todoLibrary.push(todo);
}

function removeTodo(id) {
    const updatedLibrary = todoLibrary.filter((todo) => todo.id !== id);
    todoLibrary = updatedLibrary;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem("todoLibrary", JSON.stringify(todoLibrary));
}

function addProject(project) {
    projectLibrary.push(project);
}

function updateProjects() {
    projectLibrary.forEach((project) => {
        project.todos = [];
        saveProjects();
        todoLibrary.forEach((todo) => {
            if (
                todo.project.toLowerCase() === project.title.toLowerCase() &&
                todo.project !== "none"
            ) {
                project.todos.push(todo);
                saveProjects();
            }
        });
    });
}

function invalidProject(title) {
    let isInvalid = false;
    projectLibrary.forEach((project) => {
        if (project.title.toLowerCase() === title.toLowerCase()) {
            isInvalid = true;
        }
    });
    return isInvalid;
}

function saveProjects() {
    localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
}

export {
    todoLibrary,
    projectLibrary,
    addTodo,
    removeTodo,
    saveTodos,
    addProject,
    updateProjects,
    invalidProject,
    saveProjects,
};
