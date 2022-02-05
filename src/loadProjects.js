import projects from ".";
export default loadProjects;

function loadProjects() {
    for (let i = 0; i < projects.length; i++) {
        const project = document.createElement('button');
        project.classList.add('navBtn');
        project.classList.add('project');
        project.innerHTML = `<i class="fas fa-list"></i> ${projects[i].title}`;
        project.id = projects[i].id;
        document.querySelector('.projectList').appendChild(project);
    };
};