import React from 'react';
import ReactDOM from 'react-dom';
let JsonData = require('../config.json');
let widthPos = window.screen.availWidth;
function About(props) {
    const content = props.posts.map((post) =>
            <div className="block-name" id={post.div_id} key={post.id}>
                <h2 className='block-name_header'>{post.name}</h2>
                <img src={post.avatar} className='block-name_avatar'></img>
                <p className='block-name_description' id={post.p_id}>{post.description}</p>
            </div>
    );
    return (
        <div>
                {content}
        </div>
        );
}


export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {top: "100px"},
            style_block: {width: "0px"}
            
        }
    }
    componentWillMount() {
        if (widthPos < 1024) {
            this.setState({style: {...this.state.style, visibility: "hidden"}})
        }
        else {
            this.setState({style: {...this.state.style, left: widthPos - 500 + 'px' }})
        }
        this.setState({style_block: {...this.state.style_block, width: widthPos + 'px'}})
    }
    render() {
        return <>
            <div className="Content">
                <h2 className="header-text4">О сервере</h2>
                <p className="text-description1">Это ахуенный сервер калаш вам в зад. Здесь вы можете стать кем захотите ебать. Но при этом не забывайте что вас могут выебать в жопу. Не хочешь чтобы ебали в жопу? Тогда покупай у нас привелегию и становись королём мира. У нас созданы все условия чтобы играть на сервере было максимально удобно. Так чего же ты ждёшь! Залетай на сервер и выноси мудаков! Желаем тебе не сдохнуть!</p>
                <img className="img-1" src={JsonData.images[0][3]} style={this.state.style}></img>
            </div>
            <div className="about">
                <h2 className="header-text5">О нас</h2>
                <div className="Block-about" style={this.state.style_block}>
                <About posts={JsonData.About}></About>
                </div>
                <div className="SpecialThanks">
                    <h2 className="SP_header">Особая благодарность</h2>
                    <p className="SP_name">iianajj, NeverEg, AKM_5</p>
                </div>
            </div>
        </>
    }
}