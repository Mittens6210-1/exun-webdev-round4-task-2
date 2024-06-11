import { useState } from 'react'
import '../src/styles.css'

export default function Form() {
    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState("")

    function addTask() {
        if (newTask !== "") {
            setTask(tsk => [...tsk, newTask])
            setNewTask("")
        } else {
            alert("Please Enter A Valid Task")
        }
    }

    function deleteTask(index) {
        setTask(tsks => tsks.filter((_, i) => i !== index));
    }


    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    return (
        <>
            <section>
                <div className="title">Make your To-Do List!</div>
                <form>
                    <label htmlFor="task">Task:</label>
                    <input
                        type="text"
                        id="task"
                        placeholder="Walk your pet crocodile"
                        required
                        value={newTask}
                        onChange={handleInputChange}
                    />

                    <button className='btn' type="submit" onClick={addTask}></button>
                </form>

                <div className='TitleDo'>To Do:</div>
                <ul className="list">
                    {task.map((Task, index) => (
                        <li key={index}>
                            {Task}
                            <button
                            className="Delete"
                            onClick={() => deleteTask(index)}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}