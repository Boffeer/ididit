import React from 'react';
import s from './LeftSidebar.module.css'
import {NavLink} from 'react-router-dom';

const ListItem = (props: any) => {
    debugger;
    return (
        <div className={s.tasklist_item}>{props.name}</div>
    )
}

export default ListItem
