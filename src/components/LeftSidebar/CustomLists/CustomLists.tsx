import React from 'react';
import s from './../LeftSidebar.module.css'
import ListItem from './../ListItem'


const CustomLists = (props: any) => {

    debugger;
    let theCustomLists = props.lists.map((list: any) => <ListItem name={list.name} />)

    return (
        <div className={s.tasklist}>
            <h2 className={s.tasklist_title}>Tasklists</h2>
            <div className={s.tasklistWrap}>
                <ListItem name={props.lists[1].name} />
                {theCustomLists}
            </div>
        </div>
    )
}

export default CustomLists
