'use strict';
// libs 
import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'react-typed';
// others
import Button from './buttons'
let JsonData = require('../config.json');
// Code
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
export default class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: 'url(' + JsonData.images[0][randomInteger(0,2)] + ')',
        }

    }
    componentWillMount() {
        document.body.classList.add('ContentBody');
    }
    render() {
        const style = {
            backgroundImage: this.state.images,
        }
        return (
            <div className="TopBar">
                <span className="black"></span>
                <span className="banner-img" style={style}/>
                <h2 id="header-text1">
                    <Typed strings={['Сервер', JsonData.NameServer + '<span class="typed"></span>']}/>
                </h2>
                <Button posts={JsonData.Buttons} />
                <p className="copytext">
                    IP:
                    <a href="#" className="copybutt" id="copy" onClick={() => {navigator.clipboard.writeText(JsonData.ip)}}>{JsonData.ip}</a>
                </p>
            </div>
        );
    }
}
