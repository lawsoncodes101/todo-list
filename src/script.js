import { createTodo } from "./modules/todoFactory.js";
import { createProject } from "./modules/projectFactory.js";
import {
    todoLibrary,
    projectLibrary,
    addTodo,
    saveTodos,
    addProject,
    updateProjects,
    invalidProject,
    saveProjects,
} from "./modules/storage.js";
import { renderOptions, renderTodos } from "./modules/renderTodos.js";
import { renderProjects } from "./modules/renderProjects.js";
import "./style.css";


const todoList = document.querySelector(".todos");
document.addEventListener("DOMContentLoaded", function () {
    renderTodos(todoList, todoLibrary);
    renderOptions(projectLibrary);
});

const projectList = document.querySelector(".projects");
document.addEventListener("DOMContentLoaded", function() {
    renderProjects(projectList, projectLibrary);
})

document.querySelector(".add-todo").addEventListener("click", function (e) {
    e.preventDefault();

    const title = document.querySelector("#todo-title");
    const priority = document.querySelector("#todo-priority");
    const dueDate = document.querySelector("#todo-dueDate");
    const project = document.querySelector("#todo-project");
    const description = document.querySelector("#todo-ds");

    if (title.value === "") return;
    if (isNaN(new Date(dueDate.value))) return;

    const todo = createTodo(title.value, priority.value, dueDate.value);
    todo.project = project.value;
    todo.description = description.value;
    addTodo(todo);
    updateProjects();
    saveTodos();
    renderTodos(todoList, todoLibrary);
    renderProjects(projectList, projectLibrary);

    title.value = "";
    priority.value = "normal";
    dueDate.value = "";
});

document.querySelector(".add-project").addEventListener("click", function (e) {
    e.preventDefault();

    const title = document.querySelector("#project-title");
    if (title.value === "") return;
    if (invalidProject(title.value)) return;

    const project = createProject(title.value);
    addProject(project);
    updateProjects();
    saveProjects();
    renderOptions(projectLibrary);
    renderProjects(projectList, projectLibrary);

    title.value = "";
});
