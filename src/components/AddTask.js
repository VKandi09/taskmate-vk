export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.id) {
            const date = new Date();
            const updatedTaskList = tasklist.map((todo) => (
                todo.id === task.id ? {
                    id: task.id,
                    name: e.target[0].value,
                    time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                } : todo
            ));
            setTasklist(updatedTaskList);
            setTask({});
        } else {
            const date = new Date();
            const newTask = {
                id: date.getTime(),
                name: e.target[0].value,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            setTasklist([...tasklist, newTask]);
            setTask({});
        }
    }
    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input type="text" name="addTask" value={task.name || ""} placeholder="add task" autoComplete="off" onChange={(e) => setTask({ ...task, name: e.target.value })}></input>
                <button type="submit">{ task.id ? "Update" : "Add" }</button>
            </form>
        </section>
    )
}
