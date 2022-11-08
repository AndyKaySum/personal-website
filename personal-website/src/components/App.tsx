import { useState } from 'react';
import logo from '../images/logo.svg';
import HeaderBar from './header-bar/header-bar';
import ProjectPage from './project-page/project-page';
import data from '../data';

const router = (tabIndex: number) => {
    switch (tabIndex) {
        case 1: return (
            <ProjectPage projects={data.projects} />
        )
        default: return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        );
    }
}

function App() {
    const [tab, setTab] = useState(0);

    const changeTab = (index: number) => {
        setTab(index);
    }

    return (
        <div className="App" >
            <HeaderBar 
                changeTab={changeTab}
                tabs={data.tabs}
                currentTab={tab} 
            />
            <div className='app-body'>
                {router(tab)}
            </div>
        </div>
    );
}

export default App;
