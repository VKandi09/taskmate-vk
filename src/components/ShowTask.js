export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {

    const handleEdit = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id);
        setTasklist(updatedTaskList);
    }
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">ToDo</span>
                <span className="count">{tasklist.length}</span>
            </div><br/>
            <button className="clearAll" onClick={() => setTasklist([])}>Clear All</button>
        </div>
        <ul>
            { tasklist.map((todo) => (
                <li key={todo.id}>
                    <p>
                        <label class="relative flex items-center cursor-pointer group">
                        <input class="peer sr-only" type="checkbox" />
                        <div
                            class="w-8 h-8 rounded-lg bg-white border-2 border-stone-500 transition-all duration-300 ease-in-out peer-checked:bg-gradient-to-br from-stone-600 to-stone-400 
                            peer-checked:border-0 peer-checked:rotate-12 after:content-[''] after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:opacity-0 
                            after:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWxpbmUgcG9pbnRzPSIyMCA2IDkgMTcgNCAxMiI+PC9wb2x5bGluZT48L3N2Zz4=')] 
                            after:bg-contain after:bg-no-repeat peer-checked:after:opacity-100 after:transition-opacity after:duration-300 hover:shadow-[0_0_15px_rgba(87,83,78,0.7)]"
                        ></div>
                        <span class="ml-3 text-lg font-medium text-gray-900">{todo.name}</span>
                        </label>
                        {/* <span className="name">{todo.name}</span> */}
                        <span className="time">{todo.time}</span>
                    </p>
                    <i onClick={() => handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={() => handleDelete(todo.id)} className="bi bi-trash3"></i>
                </li>
            ))}
        </ul>
    </section>
  )
}
