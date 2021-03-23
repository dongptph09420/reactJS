import React, { Component } from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="item">
                <img src={this.props.image} />
                <h2 >{this.props.name}</h2>
                <p>{this.props.color}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}


export default Demo;