import React, { Component } from 'react';

export default class Card extends Component {
    render() {
        return(
            <div style={{background: 'red'}}>
                {this.props.cardName}
            </div>
        );
    }
} 