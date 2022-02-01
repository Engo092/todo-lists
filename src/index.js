import './style.css';
import visualDisplay from './visual';

const projects = projectArray();
let idNumerator = {
    num: 0,
};
visualDisplay.initialInboxDisplay();
visualDisplay.buttonListener();


function projectArray() {
    const projectArray = [];
    return projectArray;
}

export default projects;
export { idNumerator };