import React from 'react';
import Navigation from './components/navigation/navigation.component';
import Main from './components/main/main.component';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navigation />
            <Main />
        </div>
    );
};

export default App;
