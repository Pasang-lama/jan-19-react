import React from 'react'
import Header from '../component/layouts/Header'
import Footer from '../component/layouts/Footer'
import { useState } from 'react'

function Todo() {
    const [todo, setTodo] = useState([])
    const [task, setTask] = useState('')
    return (
        <>
            <Header />
            <section className="my-5 container">
                <h1 className="mb-5">Manage: Todo List: </h1>
                <div className="d-flex gap-2">
                    <label htmlFor="todo">Task Name: </label>
                    <input type="text" id='todo' className='form-control' onChange={(e) => setTask(e.target.value)} />
                    <button className="btn-primary btn" onClick={() => setTodo([...todo, task])}>Add</button>
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
                        {
                            todo.map((items, index) => (
                                <tr>
                                    <td>{index}</td>
                                    <td>{items}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => setTodo(todo.filter((item, i) => i !== index))}>Delete</button>
                                        <button className='btn btn-success'>Clompleted</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section>
            <Footer />
        </>
    )
}

export default Todo
