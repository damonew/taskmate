export const ShowTask = ({task, setTask, tasklist, setTasklist}) => {
    
    
    const handleDelete = (id) => {
        setTasklist(tasklist.filter((task) => task.id !== id));
    }

    const handleEdit = (id) => {
        setTask(tasklist.find((task) => task.id === id))
    }

    const handleClearAll = () => {
        setTask({}, setTasklist([]));
    }
    
    return (
        <section className='showTask'>
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{tasklist.length}</span>
                </div>
                <button className="clearAll" onClick={() => handleClearAll()}>Clear All</button>
            </div>
            <ul>
                {tasklist.map((t) => (
                    <li key={t.id}>
                        <p>
                            <span className="name">{t.name}</span>
                            <span className="time">{t.time}</span>
                        </p>
                        <i className="bi bi-pencil-square" onClick={() => handleEdit(t.id)}></i>
                        <i className="bi bi-trash" onClick={() => handleDelete(t.id)}></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}