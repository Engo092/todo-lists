export default loadContent;

import { todos } from '.';
import todoDisplay from './todoDisplay';
import { format, startOfWeek, endOfWeek } from 'date-fns';

function loadContent() {
    const projectContent = document.createElement('div');
    projectContent.classList.add('projectContent');

    const project = todoDisplay.getTodoProject();
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].project == project) {
            projectContent.appendChild(todoDisplay.todoVisual(todos[i].title, todos[i].dueDate, todos[i].priority, todos[i].id));
        }
        else if (todoDisplay.getTodoProject() == 'Today' && todos[i].dueDate != null) {
            if (todos[i].dueDate == new Date().toISOString().split('T')[0]) {
                projectContent.appendChild(todoDisplay.todoVisual(todos[i].title, todos[i].dueDate, todos[i].priority, todos[i].id));
            };
        }
        else if (todoDisplay.getTodoProject() == 'This Week' && todos[i].dueDate != null) {
            const start = format(startOfWeek(new Date()), 'yyyy/MM/dd').split('/');
            const end = format(endOfWeek(new Date()), 'yyyy/MM/dd').split('/');
            if (todos[i].dueDate.split('-') >= start && todos[i].dueDate.split('-') <= end) {
                projectContent.appendChild(todoDisplay.todoVisual(todos[i].title, todos[i].dueDate, todos[i].priority, todos[i].id));
            };
        };
    };
    
    const addNewTodo = document.createElement('button');
    addNewTodo.classList.add("addNewTodo");
    addNewTodo.innerHTML = '<i class="fas fa-plus newTodo"></i> Add New Todo';
    projectContent.appendChild(addNewTodo);
    return projectContent;
};