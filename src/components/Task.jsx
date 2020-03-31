import React from 'react';

const Task = ({ task, ...props }) => {
    return (
        <li>{task.title}</li>
    )
}



export default Task