// Libs
import React from 'react';
import ReactDOM from 'react-dom';
//Components
//Styled
import '../scss/NotFound.scss'
export default class NotFound extends React.Component {
    componentWillMount() {
        document.body.classList.add('NotFoundBody');
    }
    render() {
        return (
            <>
                <h1 className="Header">404</h1>
                <h2 className="Subheader">Походу, этой страницы нет :(</h2>
            </>
        )
    }
}