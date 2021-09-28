import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {Alert} from '../Alert/Alert'
import './NewTask.css'

export const NewTask = ({addNewTask, alert, showAlertMsg}) => {
    const [text, setText] = useState('')

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const addTask = (e) => {
        if (text) {
            addNewTask(text)
        } else {
            return

        }
    }

    return (
    <section className="new-task">
        {alert && <Alert text="enter a task"/>}
        <div className="btn-container">
            <Link to="/" className="btn back-btn">Cancel</Link>
            <Link to="/" onClick={addTask} className="btn add-btn" >Done</Link>
        </div>
        <textarea onChange={handleChange} value={text} className="new-task-input" placeholder="Enter a task"></textarea>
    </section>)
}