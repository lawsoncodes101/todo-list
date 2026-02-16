import { removeTodo, updateProjects } from "./storage.js";

function renderTodos(parentElem, library) {
    while (parentElem.childElementCount > 0) {
        parentElem.removeChild(parentElem.firstChild);
    }

    library.forEach((todo) => {
        const todoContainer = document.createElement("div");
        const title = document.createElement("div");
        const priority = document.createElement("div");
        const dueDate = document.createElement("div");
        const description = document.createElement("div");
        const project = document.createElement("div");
        const removeBtn = document.createElement("button");

        title.textContent = todo.title;
        priority.textContent = todo.priority;
        dueDate.textContent = todo.dueDate;
        description.textContent = todo.description;
        project.textContent = todo.project;
        removeBtn.textContent = "Delete";
        removeBtn.addEventListener("click", function () {
            let parent = removeBtn.parentElement;
            parent.parentElement.removeChild(parent);
            removeTodo(todo.id);
            updateProjects();
        });

        todoContainer.append(
            title,
            priority,
            dueDate,
            description,
            project,
            removeBtn,
        );
        parentElem.appendChild(todoContainer);
    });
}

function renderOptions(library) {
    const select = document.querySelector("#todo-project");
    while (select.childElementCount > 1) {
        select.removeChild(select.lastChild);
    }

    library.forEach((project) => {
        let option = document.createElement("option");
        option.value = project.title;
        option.textContent = project.title;

        select.append(option);
    });
}

export { renderTodos, renderOptions };
