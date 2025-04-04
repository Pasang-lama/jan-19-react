import React, { useState } from 'react';

function App() {
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState('');

    const addTask = () => {
        if (task.trim() === '') return; 
        setTodo([...todo, { text: task, completed: false }]);
        setTask(''); 
    };

    const toggleComplete = (index) => {
        setTodo(
            todo.map((item, i) =>
                i === index ? { ...item, completed: !item.completed } : item
            )
        );
    };

    return (
        <>
            <section className="my-5 container">
                <h1 className="mb-5">Manage: Todo List</h1>
                <div className="d-flex gap-2">
                    <label htmlFor="todo">Task Name: </label>
                    <input
                        type="text"
                        id="todo"
                        className="form-control"
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button className="btn-primary btn" onClick={addTask}>
                        Add
                    </button>
                </div>
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todo.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td
                                    style={{
                                        textDecoration: item.completed
                                            ? 'line-through'
                                            : 'none',
                                    }}
                                >
                                    {item.text}
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            setTodo(todo.filter((_, i) => i !== index))
                                        }
                                    >
                                        Delete
                                    </button>
                                    <button
                                        className="btn btn-success mx-2"
                                        onClick={() => toggleComplete(index)}
                                    >
                                        {item.completed ? 'Undo' : 'Completed'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}

export default App;
