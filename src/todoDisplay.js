import { format, startOfWeek, endOfWeek } from 'date-fns';
import { todos, todoIdNumerator } from '.';
import factories from './factories';
import loadContent from './loadContent';
import todoEditor from './todoEditor';

const todoDisplay = (() => {

    const _displayForm = () => {
        const todoForm = document.createElement('div');
        todoForm.classList.add('todoForm');
        const nameAndDate = document.createElement('div');
        nameAndDate.classList.add('nameAndDate');
        const todoName = document.createElement('input');
        todoName.classList.add('todoNameInput');
        todoName.type = 'text';
        const todoDate = document.createElement('input');
        todoDate.type = 'date';
        todoDate.classList.add('todoDate');
        if (getTodoProject() == "Today") {
            todoDate.value = new Date().toISOString().split('T')[0];
            todoDate.disabled = true;
        }
        else if (getTodoProject() == "This Week") {
            const today = new Date();
            const start = format(startOfWeek(today, {weekStartsOn: 1}), 'yyyy-MM-dd');
            const end = format(endOfWeek(today, {weekStartsOn: 1}), 'yyyy-MM-dd');
            todoDate.min = start;
            todoDate.max = end;
        }
        nameAndDate.appendChild(todoName);
        nameAndDate.appendChild(todoDate);

        const todoDesc = document.createElement('textarea');
        todoDesc.classList.add('todoDescription');
        todoDesc.name = 'description';
        todoDesc.id = 'todoDesc';
        todoDesc.placeholder = 'Description of your todo';

        const btns = document.createElement('div');
        btns.classList.add('newTodoBtns');
        const addBtn = document.createElement('button');
        addBtn.classList.add('addTodoBtn');
        addBtn.innerHTML = 'Add Todo';
        const cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancelTodoBtn');
        cancelBtn.innerHTML = 'Cancel';

        const priority = document.createElement('div');
        priority.classList.add('priorities');
        priority.innerHTML = 'Priority: ';
        const lowPrio = document.createElement('button');
        lowPrio.classList.add('lowPrio');
        lowPrio.innerHTML = 'Low';
        const medPrio = document.createElement('button');
        medPrio.classList.add('medPrio');
        medPrio.innerHTML = 'Medium';
        const highPrio = document.createElement('button');
        highPrio.classList.add('highPrio');
        highPrio.innerHTML = 'High';
        priority.appendChild(lowPrio);
        priority.appendChild(medPrio);
        priority.appendChild(highPrio);

        btns.appendChild(addBtn);
        btns.appendChild(cancelBtn);
        btns.appendChild(priority);

        todoForm.appendChild(nameAndDate);
        todoForm.appendChild(todoDesc);
        todoForm.appendChild(btns);
        document.querySelector('.projectContent').appendChild(todoForm);
    };

    const _priorityDisplay = (priority, priorityDisplay) => {
        if (priority == 'low') {
            priorityDisplay.classList.add('low');
            priorityDisplay.innerHTML = 'low';
        }
        else if (priority == 'medium') {
            priorityDisplay.classList.add('medium');
            priorityDisplay.innerHTML = 'medium';
        }
        else {
            priorityDisplay.classList.add('high');
            priorityDisplay.innerHTML = 'high';
        }
    };

    const _cancelBtn = () => {
        document.querySelector('.cancelTodoBtn').addEventListener('click', function() {
            reloadContent();
        });
    };

    const _inputDealer = () => {
        priorities();
        document.querySelector('.addTodoBtn').addEventListener('click', function() {
            if (!document.querySelector('.todoNameInput').value.replace(/\s+/g, '') == '') {
                const project = getTodoProject();
                const title = document.querySelector('.todoNameInput').value;
                let desc = document.querySelector('.todoDescription').value;
                if (desc == '') {
                    desc = null;
                };
                let date = document.querySelector('.todoDate').value;
                if (date == '') {
                    date = null;
                };
                const priority = getPriority();
                
                const newTodo = factories.todo(project, title, desc, date, priority, todoIdNumerator.num);
                todos.push(newTodo);
                todoIdNumerator.num++;
                localStorage.setItem('todos', JSON.stringify(todos));
                localStorage.setItem('todoIdNumerator', JSON.stringify(todoIdNumerator));
                reloadContent();
            };
        });
    };

    const _clearPriorities = () => {
        if (document.querySelector('.lowPrio').classList.contains('selected')) {
            document.querySelector('.lowPrio').classList.remove('selected');
        };
        if (document.querySelector('.medPrio').classList.contains('selected')) {
            document.querySelector('.medPrio').classList.remove('selected');
        };
        if (document.querySelector('.highPrio').classList.contains('selected')) {
            document.querySelector('.highPrio').classList.remove('selected');
        };
    };

    const _removeTodo = (removedTodo) => {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id == removedTodo.id) {
                todos.splice(i, 1);
            };
        };
        localStorage.setItem('todos', JSON.stringify(todos));
        reloadContent();
    };


    
    const todoListener = () => {
        let editing = false;
        document.querySelector('.addNewTodo').addEventListener('click', function(){
            if (editing == false) {
                document.querySelector('.addNewTodo').remove();
                _displayForm();
                _cancelBtn();
                _inputDealer();
            };
            editing = true;
        });

        const removers = document.querySelectorAll('.removeTodo, .checkBtn');
        for (let i = 0; i < removers.length; i++) {
            removers[i].addEventListener('click', function() {
                _removeTodo(removers[i]);
            });
        };

        const pageTodos = document.querySelectorAll('.todo');
        for (let i = 0; i < pageTodos.length; i++){
            pageTodos[i].addEventListener('click', function() {
                if (editing == false) {
                    todoEditor.displayEditor(pageTodos[i]);
                };
                editing = true;
            });
        };
    };

    const todoVisual = (title, dueDate, priority, id) => {
        const todo = document.createElement('button');
        todo.classList.add('todo');
        todo.id = id;

        const check = document.createElement('button');
        check.classList.add('checkBtn');
        check.id = id;
        
        const todoName = document.createElement('p');
        todoName.classList.add('todoName');
        todoName.innerHTML = `${title}`;

        const dateAndRemove = document.createElement('div');
        dateAndRemove.classList.add('dateAndRemove');

        if (priority != null) {
            const priorityDisplay = document.createElement('span');
            priorityDisplay.classList.add('priority');
            _priorityDisplay(priority, priorityDisplay);
            dateAndRemove.appendChild(priorityDisplay);
        };

        const todoDate = document.createElement('span');
        todoDate.classList.add('todoDueDate');
        if (dueDate == null) {
            todoDate.innerHTML = 'No due date';
        }
        else {
            todoDate.innerHTML = `${format(new Date(dueDate.split('-')), 'dd/MM/yyyy')}`
        };

        const todoRemove = document.createElement('button');
        todoRemove.innerHTML = 'X';
        todoRemove.classList.add('removeTodo');
        todoRemove.id = id;

        dateAndRemove.appendChild(todoDate);
        dateAndRemove.appendChild(todoRemove);
        todo.appendChild(check);
        todo.appendChild(todoName);
        todo.appendChild(dateAndRemove);
        return todo;
    };

    const getTodoProject = () => {
        if (document.querySelector('.inbox').classList.contains('selected')) {
            return 'Inbox';
        };
        if (document.querySelector('.today').classList.contains('selected')) {
            return 'Today';
        }
        if (document.querySelector('.thisWeek').classList.contains('selected')) {
            return 'This Week';
        };

        const projectList = document.querySelectorAll('.project');
        for (let i = 0; i < projectList.length; i++) {
            if (projectList[i].classList.contains('selected')) {
                return projectList[i].getAttribute('id');
            };
        };
    };

    const priorities = () => {
        document.querySelector('.lowPrio').addEventListener('click', function() {
            _clearPriorities();
            document.querySelector('.lowPrio').classList.add('selected');
        });
        document.querySelector('.medPrio').addEventListener('click', function() {
            _clearPriorities();
            document.querySelector('.medPrio').classList.add('selected');
        });
        document.querySelector('.highPrio').addEventListener('click', function() {
            _clearPriorities();
            document.querySelector('.highPrio').classList.add('selected');
        });
    };

    const reloadContent = () => {
        document.querySelector('.projectContent').remove();
        document.querySelector('.mainContent').appendChild(loadContent());
        todoListener();
    };

    const getPriority = () => {
        if (document.querySelector('.lowPrio').classList.contains('selected')) {
            return 'low';
        };
        if (document.querySelector('.medPrio').classList.contains('selected')) {
            return 'medium';
        };
        if (document.querySelector('.highPrio').classList.contains('selected')) {
            return 'high';
        };
        return null;
    };

    return {
        todoListener,
        todoVisual,
        getTodoProject,
        priorities,
        reloadContent,
        getPriority,
    };
})();

export default todoDisplay;