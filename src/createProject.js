export default createProject;
import visualDisplay from "./visual";
import projects, { projectIdNumerator } from ".";
import factories from "./factories";

function createProject(title) {
    const projectObject = addProjectToArray(title);
    const project = document.createElement('button');
    project.classList.add('navBtn');
    project.classList.add('project');
    project.innerHTML = `<i class="fas fa-list"></i> ${title}`;
    project.id = projectObject.id;
    document.querySelector('.projectList').appendChild(project);
    visualDisplay.newProjectBtn(project);
};

function addProjectToArray(title) {
    let newProject = factories.project(title, projectIdNumerator.num);
    projects.push(newProject);
    projectIdNumerator.num++;
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('projectIdNumerator', JSON.stringify(projectIdNumerator));
    return newProject;
};