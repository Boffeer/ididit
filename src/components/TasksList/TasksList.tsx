import React from 'react'
import Task from './Task/Task'

const TasksList = (props: any) => {
    let taskItems = props.tasks.items.map((task: any) => <Task id={task.id} taskText={task.taskText} taskList={task.taskList} checklist={task.checklist} />)

    return (
        <div className="tasklist-wrap section-wrap section-wrap--middle">

            <div className="tasklist-header">
                <div className="tasklist-header_title">Tasklist title</div>
                <div className="tasklist-header-controls">
                    <button>More</button>
                    <button>Sort</button>
                    <button>Share</button>
                </div>
            </div>

            <div className="tasklist">
                {taskItems}
            </div>
        </div>

    )
}

export default TasksList
