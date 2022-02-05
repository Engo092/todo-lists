import projects, { todos } from ".";
export default removeProject;

function removeProject() {
    const projectTitle = document.querySelector('.contentTitle');
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == projectTitle.innerHTML) {
            for (let j = 0; j < todos.length; j++) {
                if (todos[j].project == projects[i].id) {
                    todos.splice(j, 1);
                };
            };
            document.getElementById(`${projects[i].id}`).remove();
            projects.splice(i, 1);
        };
    };
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('projects', JSON.stringify(projects));
};