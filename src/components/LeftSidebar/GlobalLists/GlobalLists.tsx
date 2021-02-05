import React from 'react';
import s from './../LeftSidebar.module.css'
import ListItem from './../ListItem'
import {NavLink} from 'react-router-dom';

const GlobalLists = (props: any) => {
    return (
        <div className={s.tasklist}>
            <div className={s.tasklist_title}>
                <NavLink
                    className={s.tasklist_title__link}
                    activeClassName={s.active}
                    to="/tasks"
                >
                    <h1>ididit</h1>
                </NavLink>
                <NavLink
                    activeClassName={s.active}
                    className={s.settings}
                    to="/settings"
                >
                    settings
                </NavLink>
            </div>
            <div className="sidebar-tasklist-list">
                <div className={s.tasklist_item}>Today</div>
                <div className={s.tasklist_item}>Week</div>
                <div className={s.tasklist_item}>All</div>
                <div className={s.tasklist_item}>Inbox</div>
            </div>
        </div>
    )
}

export default GlobalLists
