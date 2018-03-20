import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return(
            <div style={{background: 'lightGreen'}}>
                {this.props.cardName}
            </div>
        );
    }
} 