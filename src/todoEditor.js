import { todos } from ".";
import todoDisplay from "./todoDisplay";
import { format, startOfWeek, endOfWeek } from 'date-fns';

const todoEditor = (() => {

    const _getTodoObject = (todo) => {
        for (let i = 0; i < todos.length; i++) {
            if (todo.id == todos[i].id) {
                return todos[i];
            };
        };
    };

    const _editTodo = () => {
        if (!document.querySelector('.todoNameInput').value.replace(/\s+/g, '') == '') {
            const title = document.querySelector('.todoNameInput').value;
            let desc = document.querySelector('.todoDescription').value;
            if (desc == '') {
                desc = null;
            };
            let date = document.querySelector('.todoDate').value;
            if (date == '') {
                date = null;
            };
            const priority = todoDisplay.getPriority();

            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id == document.querySelector('.todoEditor').id) {
                    todos[i].title = title;
                    todos[i].description = desc;
                    todos[i].dueDate = date;
                    todos[i].priority = priority;
                };
            };
            localStorage.setItem('todos', JSON.stringify(todos));
            todoDisplay.reloadContent();
        };
    };

    const _editorDealer = () => {
        todoDisplay.priorities();
        document.querySelector('.editTodoBtn').addEventListener('click', function() {
            _editTodo();
        });

        document.querySelector('.cancelEditBtn').addEventListener('click', function() {
            todoDisplay.reloadContent();
        });
    };


    // Yes i know this function is very similar to _displayForm in the todoDisplay file
    const displayEditor = (todo) => {
        const todoObject = _getTodoObject(todo);

        const todoEditor = document.createElement('div');
        todoEditor.classList.add('todoEditor');
        todoEditor.id = todoObject.id;
        const nameAndDate = document.createElement('div');
        nameAndDate.classList.add('nameAndDate');
        const todoName = document.createElement('input');
        todoName.classList.add('todoNameInput');
        todoName.type = 'text';
        todoName.value = todoObject.title;
        const todoDate = document.createElement('input');
        todoDate.type = 'date';
        todoDate.value = todoObject.dueDate;
        if (todoDisplay.getTodoProject() == 'Today') {
            todoDate.disabled = true;
        }
        else if (todoDisplay.getTodoProject() == "This Week") {
            const today = new Date();
            const start = format(startOfWeek(today), 'yyyy-MM-dd');
            const end = format(endOfWeek(today), 'yyyy-MM-dd');
            todoDate.min = start;
            todoDate.max = end;
        }
        todoDate.classList.add('todoDate');
        nameAndDate.appendChild(todoName);
        nameAndDate.appendChild(todoDate);

        const todoDesc = document.createElement('textarea');
        todoDesc.classList.add('todoDescription');
        todoDesc.name = 'description';
        todoDesc.id = 'todoDesc';
        if (todoObject.description == null) {
            todoDesc.placeholder = 'No description';
        }
        else {
            todoDesc.value = todoObject.description;
        };

        const btns = document.createElement('div');
        btns.classList.add('todoEditorBtns');
        const editBtn = document.createElement('button');
        editBtn.classList.add('editTodoBtn');
        editBtn.innerHTML = 'Edit';
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancelEditBtn');
        cancelBtn.innerHTML = 'Cancel';

        const priority = document.createElement('div');
        priority.classList.add('priorities');
        priority.innerHTML = 'Priority: ';
        const lowPrio = document.createElement('button');
        lowPrio.classList.add('lowPrio');
        if (todoObject.priority == 'low') {
            lowPrio.classList.add('selected')
        };
        lowPrio.innerHTML = 'Low';
        const medPrio = document.createElement('button');
        medPrio.classList.add('medPrio');
        if (todoObject.priority == 'medium') {
            medPrio.classList.add('selected')
        };
        medPrio.innerHTML = 'Medium';
        const highPrio = document.createElement('button');
        highPrio.classList.add('highPrio');
        if (todoObject.priority == 'high') {
            highPrio.classList.add('selected')
        };
        highPrio.innerHTML = 'High';
        priority.appendChild(lowPrio);
        priority.appendChild(medPrio);
        priority.appendChild(highPrio);

        btns.appendChild(editBtn);
        btns.appendChild(cancelBtn);
        btns.appendChild(priority);

        todoEditor.appendChild(nameAndDate);
        todoEditor.appendChild(todoDesc);
        todoEditor.appendChild(btns);
        todo.replaceWith(todoEditor);

        _editorDealer();
    };

    return {
        displayEditor,
    }
})();

export default todoEditor;