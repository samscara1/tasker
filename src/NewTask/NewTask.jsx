import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {Alert} from '../Alert/Alert'
import './NewTask.css'

export const NewTask = ({addNewTask, alert, showAlertMsg}) => {
    const [text, setText] = useState('')
    const history = useHistory()

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const addTask = (e) => {
        if (text) {
            addNewTask(text)
            backToHome()
        } else {
            backToHome()

        }
    }

    const backToHome = () => {
        history.push("/")
    }

    return (
    <section className="new-task">
        {alert && <Alert text="enter a task"/>}
        <div className="btn-container">
            <button type="button" className="btn back-btn" onClick={backToHome} >Cancel</button>
            <button type="button" className="btn back-btn" onClick={addTask} >Done</button>
        </div>
        <textarea onChange={handleChange} value={text} className="new-task-input" placeholder="Enter a task"></textarea>
    </section>)
}