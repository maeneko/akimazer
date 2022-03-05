//Components
import TopBar from './components/topbar';
// Libs
import React from 'react';
import ReactDOM from 'react-dom';

// Styled
import "./scss/topbar.scss"
import "./scss/cursor.scss"

import background_1 from '../src/img/background_1.png'

ReactDOM.render(
    <TopBar />,
    document.getElementById('app')
);