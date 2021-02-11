import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {
        return(
            <div>
                <img src = {this.props.pokeImage} alt = {this.props.pokemon}/>
                <p>{this.props.pokemon}</p>
                <p>{this.props.type}</p>
                <p>{this.props.attack}</p>
            </div>
        )
    }
}