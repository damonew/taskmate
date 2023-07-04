
export const AddTask = ({ task, setTask, tasklist, setTasklist }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date();

        if (task.id) { // EDIT
            const updatedTaskList = tasklist.map((t) => (
                (t.id === task.id) ? { id: task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : t
            ))
            e.target.task.value = "";
            setTasklist(updatedTaskList);
        } else { // ADD
            const name = e.target.task.value;
            const newTask = {
                id: date.getTime(),
                name,
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            }
            e.target.task.value = "";
            setTasklist([...tasklist, newTask]);
        }
        setTask({});
    }

    return (
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={e => setTask({ ...task, name: e.target.value })}
                    name="task"
                    type="text"
                    value={task.name || ""}
                    placeholder="Add Task"
                    autoComplete="off"
                    maxLength="25"
                />
                <button type="submit">{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}
