const factories = (() => {
    const todo = (project, title, description, dueDate, priority) => {
        return { project, title, description, dueDate, priority };
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