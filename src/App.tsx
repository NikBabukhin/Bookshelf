import React from 'react';
import './App.css';
import {BookSection} from "./Components/BookSection/BookSection";

function App() {
    return (
        <div className={'App'}>
            <h1 className={'Head'}>Welcome to the <span className={'Head__span'}>bookshelf</span></h1>
            <BookSection/>
        </div>
    );
}

export default App;
