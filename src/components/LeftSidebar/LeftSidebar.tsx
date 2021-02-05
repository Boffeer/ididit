import React from 'react';
import CustomLists from './CustomLists/CustomLists'
import GlobalLists from './GlobalLists/GlobalLists'


const LeftSidebar = (props: any) => {
    return (
        <aside className="sidebar sidebar--left">
            <GlobalLists />
            <CustomLists lists={props.lists.taskLists} />
        </aside>
    )
}

export default LeftSidebar
