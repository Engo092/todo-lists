export default loadContent;

import { todos } from '.';
import todoDisplay from './todoDisplay';

function loadContent() {
    const projectContent = document.createElement('div');
    projectContent.classList.add('projectContent');

    const project = todoDisplay.getTodoProject();
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].project == project) {
            projectContent.appendChild(todoDisplay.todoVisual(todos[i].title, todos[i].dueDate, todos[i].priority, todos[i].id));
        };
    };
    
    const addNewTodo = document.createElement('button');
    addNewTodo.classList.add("addNewTodo");
    addNewTodo.innerHTML = '<i class="fas fa-plus newTodo"></i> Add New Todo';
    projectContent.appendChild(addNewTodo);
    return projectContent;
};