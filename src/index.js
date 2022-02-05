import './style.css';
import visualDisplay from './visual';
import loadProjects from './loadProjects';

let projects = [];
let todos = [];
let projectIdNumerator = {};
let todoIdNumerator = {};

if (localStorage.getItem('projects') == null || localStorage.getItem('projects').length == 0) {
    projects = projectArray();
    projectIdNumerator = {
        num: 0
    };
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('projectIdNumerator', JSON.stringify(projectIdNumerator));
}
else {
    projects = JSON.parse(localStorage.getItem('projects') || '[]');
    projectIdNumerator = JSON.parse(localStorage.getItem('projectIdNumerator') || '{}');
};

if (localStorage.getItem('todos') == null || localStorage.getItem('todos').length == 0) {
    todos = todoArray();
    todoIdNumerator = {
        num: 0
    };
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('todoIdNumerator', JSON.stringify(todoIdNumerator));
}
else {
    todos = JSON.parse(localStorage.getItem('todos') || '[]');
    todoIdNumerator = JSON.parse(localStorage.getItem('todoIdNumerator') || '{}');
};

export default projects;
export { projectIdNumerator };
export { todos };
export { todoIdNumerator };


visualDisplay.initialInboxDisplay();
loadProjects();
visualDisplay.buttonListener();



function projectArray() {
    const projectArray = [];
    return projectArray;
};

function todoArray() {
    const todoArray = [];
    return todoArray;
};