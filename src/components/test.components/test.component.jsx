import React from 'react';
import './test.component.style.css';
import Inception from './inception.component';

function MyApp() {
    return (
        <div>
            <h1>This is a new component. It is just an H1</h1>
            <p>And here is the paragraph. Let's see if this works!</p>
            <Inception />
        </div>

    )
}

export default MyApp;