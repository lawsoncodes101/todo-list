import { createTask } from "../modules/taskFactory.js";
import { createProject } from "../modules/projectFactory.js";
import {
    taskLibrary,
    projectLibrary,
    addTask,
    saveTasks,
    addProject,
    updateProjects,
    validateProject,
    saveProjects,
} from "../modules/storage.js";
import { renderOptions, renderTasks } from "../modules/ui.js";
import "./style.css";

const taskList = document.querySelector(".task-list");
document.addEventListener("DOMContentLoaded", function () {
    renderTasks(taskList, taskLibrary);
    renderOptions(projectLibrary);
});

document.querySelector(".add-task").addEventListener("click", function (e) {
    e.preventDefault();

    const title = document.querySelector("#task-title");
    const priority = document.querySelector("#task-priority");
    const dueDate = document.querySelector("#task-dueDate");
    const project = document.querySelector("#task-project");

    if (title.value === "") return;
    if (isNaN(new Date(dueDate.value))) return;

    const task = createTask(title.value, priority.value, dueDate.value);
    task.project = project.value;
    addTask(task);
    updateProjects();
    saveTasks();
    renderTasks(taskList, taskLibrary);

    title.value = "";
    priority.value = "normal";
    dueDate.value = "";
});

document.querySelector(".add-project").addEventListener("click", function (e) {
    e.preventDefault();

    const title = document.querySelector("#project-title");
    if (title.value === "") return;
    if (!validateProject(title.value)) return;

    const project = createProject(title.value);
    addProject(project);
    updateProjects();
    saveProjects();
    renderOptions(projectLibrary);

    title.value = "";
});
