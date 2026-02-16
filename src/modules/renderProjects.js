import { renderTodos } from "./renderTodos.js";

function renderProjects(parentElem, library) {
    while (parentElem.childElementCount > 0) {
        parentElem.removeChild(parentElem.firstChild);
    }

    library.forEach((project) => {
        const h3 = document.createElement("h3");
        const projectContainer = document.createElement("div");
        const todoContainer = document.createElement("div");

        h3.textContent = project.title;
        renderTodos(todoContainer, project.todos);

        projectContainer.append(h3, todoContainer);
        parentElem.append(projectContainer);
    })
}

export { renderProjects };