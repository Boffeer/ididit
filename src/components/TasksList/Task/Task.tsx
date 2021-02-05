import React from 'react';
import s from './Task.module.css'
import {NavLink} from 'react-router-dom';

const Task = (props: any) => {

    let checklistCount: number
    let path: string = `/tasks/id/${props.id}`
    const countChecklistItems = (checklist: Array<string>): number => {
        checklist.forEach((item: string, i: number, arr: Array<string>) => {
            checklistCount = ++i;
            return checklistCount
        })
        return checklistCount
    }

    return (
        <NavLink
            to={path}
            className={s.item}
            activeClassName={s.item__active}
        >
            <input className={s.checkbox} type="checkbox" />
            <div className={s.info}>
                <input
                    className={s.text}
                    type="text"
                    name="taskText"
                    defaultValue={props.taskText}
                />
                <div className={s.status_wrap}>
                    <span className={s.status}>{props.taskList}</span>
                    <span className={s.status}>0 of {countChecklistItems(props.checklist)}</span>
                    <span className={s.status}>Today rep</span>
                </div>
            </div>
            <button className="takslist-item_priority" type="submit">Prior</button>
        </NavLink>
    )
}

export default Task
