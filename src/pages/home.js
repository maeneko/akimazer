// Libs
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import TopBar from '../components/topbar'
import Headed from '../components/Headed'
// Styled
import "../scss/topbar.scss"
import "../scss/cursor.scss"
export default function Home() {
    return(
        <>
            <TopBar />
            <Headed/>
        </>
    )
}
