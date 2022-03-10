import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'react-typed';
const ip = "0.0.0.0:0000"
function Button(props) {
    const content = props.posts.map((post) =>
        <li key={post.id}>
            <a href={post.content} className="butt">{post.title}</a>
        </li>
    );
    return (
        <ul>
            {content}
        </ul>
    );
}
//,
export default class TopBar extends React.Component {
    constructor(props) {
        super();
        this.state = {
            buttdata: [
                {id: 1, title: 'Главная', content: 'Hahahaha'},
                {id: 2, title: 'Донаты', content: 'NotDonate'}
            ],
            text: 'JazzerAnarxi',
            textToCopy: {ip},

        }
    }
    render() {
        return (
            <>
                <span className="black"></span>
                <span className="banner-img" ></span>
                <h2 id="header-text1">
                    <Typed strings={['Сервер', 'JazzerAnarxi<span class="typed"></span>']}/>
                </h2>
                <Button posts={this.state.buttdata} />
                <p className="copytext">
                    IP:
                    <a href="#" className="copybutt" id="copy" onClick={() => {this.copy()}}>{ip}</a>
                </p>
            </>
        );
    }
}
