# Todo List

A dynamic Todo List application built with JavaScript that allows users to create, organize, and manage tasks in multiple projects. Todos are objects that can be dynamically created using classes or factories, and the app persists data using `localStorage`.

---

## Features

### Manage Todos
- Create new todos with properties:
  - `title`
  - `description`
  - `dueDate`
  - `priority`
  - `subtasks`
- Mark todos as complete
- Edit todo details
- Delete todos

### Projects
- Default project for new users
- Create multiple projects
- Assign todos to specific projects
- View all projects and todos in each project

### User Interface
- Show all projects
- Show todos by project (title and due date visible)
- Visual priority indicators (e.g., color coding)
- Expand todos to see/edit details

### Persistence
- Uses `localStorage` to save projects and todos
- Data persists even after page refresh
- Automatically loads saved data when the app starts
- Handles empty or missing data gracefully

---

## Technology

- **JavaScript (ES6+)**  
- **Webpack** for bundling modules  
- **date-fns** (optional) for date formatting and manipulation  
- **localStorage API** for persistence  

---

## Architecture

- **Modular design**
  - **Application logic**: managing todos, projects, completion status, priority changes
  - **DOM logic**: rendering UI, handling user interactions
- **Separation of concerns** ensures maintainable, testable code

---

## Usage

1. Clone the repository:

```bash
git clone https://github.com/lawsoncodes101/todo-list.git
cd todo-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the server (localhost:8080)

```bash
npm run start
```
