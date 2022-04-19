import React from 'react';
import ReactDOM from 'react-dom';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {  top: "100px"}
        }
    }
    componentWillMount() {
        let widthPos = window.screen.availWidth;
        if (widthPos < 1024) {
            this.setState({style: {...this.state.style, visibility: "hidden"}})
        }
        else {
            this.setState({style: {...this.state.style, left: window.screen.availWidth - 500 + 'px' }})
        }

    }
    render() {
        return <>
            <div className="Content">
                <h2 className="header-text4">О сервере</h2>
                <p className="text-description1"><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consequatur corporis ea fugit id laudantium nam nihil quas unde? Beatae cum earum illo impedit incidunt modi nemo, qui quod.</span><span>Accusamus consequatur, delectus deserunt error est expedita harum illum ipsa ipsam itaque iusto laboriosam libero molestiae molestias nemo nulla obcaecati officia quis quo repellendus reprehenderit rerum saepe sequi suscipit voluptas!</span><span>Esse, fugiat hic ipsa ipsam laborum molestias natus perspiciatis quam quia quo reiciendis repudiandae, saepe, sunt. Culpa cumque distinctio doloremque impedit maiores perferendis! Ea earum expedita natus numquam perferendis ut.</span></p>
                <img className="img-1" src="https://i.imgur.com/zl3szXf.png" style={this.state.style}></img>
            </div>
            <div className="donate">
                <h2 className="header-text5">Донат</h2>
            </div>
        </>
    }
}