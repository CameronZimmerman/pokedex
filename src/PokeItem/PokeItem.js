import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        return(
            <Link to = {`pokedex/${this.props.pokemon}`} style={{ textDecoration: 'none', color: 'inherit'}}>
                <div className = "pokeitem">
                    <img src = {this.props.pokeImage} alt = {this.props.pokemon}/>
                    <p>Pokemon: {this.props.pokemon}</p>
                    <p>Type: {this.props.type}</p>
                    <p>Weight: {this.props.weight}</p>
                    <p>Height: {this.props.height}</p>
                </div>
            </Link>
        )
    }
}