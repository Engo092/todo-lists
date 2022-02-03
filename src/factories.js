const factories = (() => {
    const todo = (project, title, description, dueDate, priority, id) => {
        return { project, title, description, dueDate, priority, id };
    }

    const project = (title, id) => {
        return { title, id };
    }

    return {
        todo,
        project,
    }
})();

export default factories;