let state = {
    lists: {
        taskLists: [
            {id: `0`, name: `Complete react course`, created: ``},
            {id: `1`, name: `Become a Vim master`, created: ``},
            {id: `2`, name: `Code your own todolist`, created: ``},
            {id: `3`, name: `Complete react course`, created: ``},
        ],
    },
    tasks: {
        items: [
            {
                id: `0`,
                taskList: `New`, /* Created by User */
                globalTaskLisk: `Today`, /* Today, Week, All, Inbox */
                taskText: `Some good task`,
                description: ``,
                created: ``,
                checklist: [`Subtask 1`, `Subtask 2`, `Subtask 3`, `Subtask 2`, `Subtask 3`,],
                repeatance: {
                    repeatable: true,
                    occurencies: -1,
                    repType: `daily`, /* Daily, Weekly, Monthly, Yearly, Custom */
                    day: `monday`,
                    date: 12,
                }
            },
            {id: `1`, taskList: `React`, taskText: `Complete react course`, checklist: []},
            {id: `2`, taskList: `React`, taskText: `Code your todolist`, checklist: [`Subtask 1`, `Subtask 2`,]},
        ],
    },
    settings: {
        isTaskoDayCounterActive: false,
        moveStarredOnTop: true,
        showCompletedTasks: false,
    },
}

export default state
