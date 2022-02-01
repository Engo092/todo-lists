import loadContent from "./loadContent";
import newProject from "./newProject";
import projects from ".";
import removeProject from "./rmProject";

const visualDisplay = (() => {

    const _clearDisplay = () => {
        const oldContent = document.querySelector('.projectContent');
        oldContent.remove();
    }

    const _displayContent = (div) => {
        const title = _getTitle(div);
        const contentTitle = document.querySelector('.contentTitle');
        contentTitle.innerHTML = title;
        const projectContent = document.createElement('div');
        projectContent.classList.add('projectContent');
        projectContent.appendChild(loadContent());
        document.querySelector('.mainContent').appendChild(projectContent);
    }

    const _updateDisplay = (div) => {
        const buttons = document.querySelectorAll('.navBtn');
        for (let j = 0; j < buttons.length; j++) {
            if (buttons[j].classList.contains('selected')) {
                buttons[j].classList.remove('selected');
            };
        };
        div.classList.add('selected');
        
        if (div.classList.contains('today') || div.classList.contains('thisWeek')) {
            _removeAddTask();
        }

        if (div.classList.contains("project") && !document.querySelector('.deleteBtn')) {
            _addDelBtn();
        }
        else if (document.querySelector('.deleteBtn') && !div.classList.contains("project")) {
            _rmDelBtn();
        };
        _clearDisplay();
        _displayContent(div);
    };

    const _getTitle = (div) => {
        if (div.classList.contains('inbox')) {
            return "Inbox";
        };
        if (div.classList.contains('today')) {
            return "Today";
        };
        if (div.classList.contains('thisWeek')) {
            return "This Week";
        };
        if (div.classList.contains('project')) {
            for (let i = 0; i < projects.length; i++) {
                if (projects[i].id == div.id) {
                    return projects[i].title;
                }
            }
        };
        return "Error";
    };

    const _addDelBtn = () => {
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.innerHTML = 'Delete Project';
        document.querySelector('.contentHead').appendChild(deleteBtn);
        deleteBtn.addEventListener('click', function() {
            removeProject();
            _rmDelBtn();
            _updateDisplay(document.querySelector('.inbox'));
        });
    };

    const _rmDelBtn = () => {
        document.querySelector('.deleteBtn').remove();
    };

    const _loadProjectIntoPage = () => {
        //
    };



    const initialInboxDisplay = () => {
        const inbox = document.querySelector('.inbox');
        const contentTitle = document.querySelector('.contentTitle');
        const content = document.createElement('div');
        content.classList.add('projectContent');
        content.appendChild(loadContent());
        inbox.classList.add('selected');
        contentTitle.innerHTML = "Inbox";
        document.querySelector('.mainContent').appendChild(content);
    };

    const buttonListener = () => {
        const navBtns = document.querySelectorAll('.navBtn');
        for (let i = 0; i < navBtns.length; i++) {
            navBtns[i].addEventListener('click', function() {
                if (!navBtns[i].classList.contains('addNewProject')) {
                    _updateDisplay(navBtns[i]);
                }
                else {
                    newProject.mainChange();
                };
            });
        };
    };

    const newProjectBtn = (button) => {
        button.addEventListener('click', function() {
            _updateDisplay(button);
        });
    };

    return {
        initialInboxDisplay,
        buttonListener,
        newProjectBtn,
    };
})();


export default visualDisplay;