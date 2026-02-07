let taskLibrary = JSON.parse(localStorage.getItem("taskLibrary")) || [];
let projectLibrary = JSON.parse(localStorage.getItem("projectLibrary")) || [];

function addTask(task) {
    taskLibrary.push(task);
}

function removeTask(id) {
    const updatedLibrary = taskLibrary.filter((task) => task.id !== id);
    taskLibrary = updatedLibrary;
    saveTasks();
}

function saveTasks() {
    localStorage.setItem("taskLibrary", JSON.stringify(taskLibrary));
}

function addProject(project) {
    projectLibrary.push(project);
}

function updateProjects() {
    projectLibrary.forEach((project) => {
        project.tasks = [];
        saveProjects();
        taskLibrary.forEach((task) => {
            if (
                task.project.toLowerCase() === project.title.toLowerCase() &&
                task.project !== "none"
            ) {
                project.tasks.push(task);
                saveProjects();
            }
        });
    });
}

function validateProject(title) {
    projectLibrary.forEach((project) => {
        if (project.title.toLowerCase() === title.toLowerCase()) {
            return false;
        } else return true;
    });
}

function saveProjects() {
    localStorage.setItem("projectLibrary", JSON.stringify(projectLibrary));
}

export {
    taskLibrary,
    projectLibrary,
    addTask,
    removeTask,
    saveTasks,
    addProject,
    updateProjects,
    validateProject,
    saveProjects,
};
