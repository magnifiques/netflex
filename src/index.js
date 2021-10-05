import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyled} from "./global-styled"
import "normalize.css"
import { firebase } from './lib/firebase.prod';
import {FirebaseContext} from "./contexts/FirebaseContext"

ReactDOM.render(
    <>
    <FirebaseContext.Provider value={{firebase}}>
    <GlobalStyled/>
    <App />
    </FirebaseContext.Provider>
    </>,
    document.getElementById('root'));
