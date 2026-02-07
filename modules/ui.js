import { removeTask, updateProjects } from "./storage.js";

function renderTasks(parentElem, library) {
    while (parentElem.childElementCount > 0) {
        parentElem.removeChild(parentElem.firstChild);
    }

    library.forEach((task) => {
        const taskContainer = document.createElement("div");
        const title = document.createElement("div");
        const priority = document.createElement("div");
        const dueDate = document.createElement("div");
        const project = document.createElement("div");
        const removeBtn = document.createElement("button");

        title.textContent = task.title;
        priority.textContent = task.priority;
        dueDate.textContent = task.dueDate;
        project.textContent = task.project;
        removeBtn.textContent = "Delete";
        removeBtn.addEventListener("click", function () {
            let parent = removeBtn.parentElement;
            parent.parentElement.removeChild(parent);
            removeTask(task.id);
            updateProjects();
        });

        taskContainer.append(title, priority, dueDate, project, removeBtn);
        parentElem.appendChild(taskContainer);
    });
}

function renderProjects(projectLibrary, taskLibrary) {}

function renderOptions(library) {
    const select = document.querySelector("#task-project");
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

export { renderTasks, renderOptions };
