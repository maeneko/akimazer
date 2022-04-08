import React from 'react';
import ReactDOM from 'react-dom';
import Typed from 'react-typed';
const ip = "0.0.0.0:0000";
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
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
        super(props);
        this.state = {
            buttdata: [
                {id: 1, title: 'Главная', content: 'Hahahaha'},
                {id: 2, title: 'Донаты', content: 'NotDonate'}
            ],
            text: 'JazzerAnarxi',
            textToCopy: {ip},
            images: ['url(https://i.imgur.com/yxmDfU2.png)', 'url(https://i.imgur.com/Y0taCUb.png)', 'url(https://i.imgur.com/aRuMBCb.png)'],
        }

    }

    componentWillMount() {
        document.body.classList.add('ContentBody');

    }
    render() {
        const style = {
            backgroundImage: this.state.images[randomInteger(0, 2)]
        }
        return (
            <div className="TopBar">
                <span className="black"></span>
                <span className="banner-img" style={style}/>
                <h2 id="header-text1">
                    <Typed strings={['Сервер', 'JazzerAnarxi<span class="typed"></span>']}/>
                </h2>
                <Button posts={this.state.buttdata} />
                <p className="copytext">
                    IP:
                    <a href="#" className="copybutt" id="copy" onClick={() => {this.copy()}}>{ip}</a>
                </p>
            </div>
        );
    }
}
