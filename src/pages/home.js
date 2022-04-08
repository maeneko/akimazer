// Libs
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import TopBar from '../components/topbar'
import Headed from '../components/Headed'
import Content from "../components/content";
// Styled
import "../scss/topbar.scss"
import "../scss/cursor.scss"
import "../scss/content.scss"
export default function Home() {
    return(
        <>
            <Headed/>
            <TopBar />
            <Content/>
        </>
    )
}
