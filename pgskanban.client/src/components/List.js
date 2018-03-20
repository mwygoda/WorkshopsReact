import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {
    renderCards = () => {
        return(
            this.props.cards.map(card => <Card cardName={card.name}/>)
        );
    }
    
    render() {
        return(
            <div style={{background: 'yellow', paddingBottom:'10px'}}>
                {this.props.listName}
                {this.renderCards()}
            </div>
        );
    }
}