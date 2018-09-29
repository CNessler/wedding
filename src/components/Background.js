import title from '../title.png';
import React, { Component } from 'react';

class Background extends Component {

    render() {
        return (
            <div>
            <div id="wrapperHeader">
                <img src={title} className="title"></img>
            </div>
            </div>
        )
    }
}

export default Background;