import createProject from "./createProject";

const newProject = (() => {

    const _hideButton = () => {
        const newProjectButton = document.querySelector('.addNewProject');
        newProjectButton.classList.add('hidden');
    };

    const _createDisplay = () => {
        const newProjectDisplay = document.createElement('div');
        const projectName = document.createElement('input');
        const buttons = document.createElement('div');
        const addButton = document.createElement('button');
        const cancelButton = document.createElement('button');
        newProjectDisplay.classList.add('newProjectForm');
        addButton.classList.add('addProjectBtn');
        addButton.innerHTML = "Add";
        cancelButton.classList.add('cancelProjectBtn');
        cancelButton.innerHTML = "Cancel";
        buttons.classList.add('newProjectBtns');
        projectName.type = 'text';
        projectName.required = true;
        projectName.classList.add('newProjectName');
        buttons.appendChild(addButton);
        buttons.appendChild(cancelButton);
        newProjectDisplay.appendChild(projectName);
        newProjectDisplay.appendChild(buttons);
        document.querySelector('.projects').appendChild(newProjectDisplay);
    };

    const _reverseDisplay = () => {
        document.querySelector('.newProjectForm').remove();
        document.querySelector('.addNewProject').classList.remove('hidden');
    };



    const mainChange = () => {
        _hideButton();
        _createDisplay();

        document.querySelector('.cancelProjectBtn').addEventListener('click', function() {
            _reverseDisplay();
        });
        
        document.querySelector('.addProjectBtn').addEventListener('click', function() {
            const name = document.querySelector('.newProjectName');
            if (name.value.length > 50) {
                alert("Please enter a title smaller than or equal to 50 characters in length");
            }
             else if (!name.value.replace(/\s+/g, '') == "") {
                createProject(name.value);
                _reverseDisplay();
            };
        });
    };

    return {
        mainChange,
    };
})();

export default newProject;