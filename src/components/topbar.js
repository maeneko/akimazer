import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'react-typed';
function Blog(props) {
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
                {id: 1, title: 'Главная', content: 'Добро пожаловать в документацию React!'},
                {id: 2, title: 'Донаты', content: 'React можно установить из npm.'}
            ],
            text: 'JazzerAnarxi',
            style_img: "background: url(\"../img/background_1.png\") repeat",
            textToCopy: "217.106.107.160:27466"
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
                <Blog posts={this.state.buttdata} />
                <p className="copytext">
                    IP:
                    <a href="#" className="copybutt" id="copy"onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>217.106.107.160:27466</a>
                </p>
            </>
        );
    }
}
