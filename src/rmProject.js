import projects from ".";
export default removeProject;

function removeProject() {
    const projectTitle = document.querySelector('.contentTitle');
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].title == projectTitle.innerHTML) {
            document.getElementById(`${projects[i].id}`).remove();
            projects.splice(i, 1);
        }
    }
};