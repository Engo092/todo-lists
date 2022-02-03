import './style.css';
import visualDisplay from './visual';

const projects = projectArray();
const todos = todoArray();
let projectIdNumerator = {
    num: 0,
};
let todoIdNumerator = {
    num: 0,
}
visualDisplay.initialInboxDisplay();
visualDisplay.buttonListener();


function projectArray() {
    const projectArray = [];
    return projectArray;
}

function todoArray() {
    const todoArray = [];
    return todoArray;
}

export default projects;
export { projectIdNumerator };
export { todos }
export { todoIdNumerator }