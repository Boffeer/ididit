import React, {useState} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import LeftSidebar from './components/LeftSidebar/LeftSidebar';
import RightSidebar from './components/RightSidebar/RightSidebar';
import TasksList from './components/TasksList/TasksList';
import Search from './components/Search/Search';
import Settings from './components/Settings/Settings';

const App = (props: any) => {
    const [inputText, setInputText] = useState("");

    return (
        <BrowserRouter>
            <div className="App">

                <LeftSidebar lists={props.state.lists} />
                <main className="middle-section">
                    <Search setInputText={setInputText} />
                    <Route path="/tasks" render={() => <TasksList tasks={props.state.tasks} />} />
                    <Route path="/settings" render={() => <Settings />} />
                </main>
                <Route path="/tasks/id/*" component={RightSidebar} />

            </div>
        </BrowserRouter>
    );
}

export default App;
