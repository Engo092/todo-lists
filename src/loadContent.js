export default loadContent;

function loadContent() {
    const addNewTodo = document.createElement('button');
    addNewTodo.classList.add("addNewTodo");
    addNewTodo.innerHTML = '<i class="fas fa-plus newTodo"></i> Add New Todo';
    return addNewTodo;
}