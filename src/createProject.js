export default createProject;
import visualDisplay from "./visual";
import projects, { idNumerator } from ".";
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
    let newProject = factories.project(title, idNumerator.num);
    projects.push(newProject);
    idNumerator.num++;
    return newProject;
}