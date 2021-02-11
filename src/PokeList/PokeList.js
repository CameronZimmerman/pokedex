import React, { Component} from 'react';
import PokeItem from '../PokeItem/PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <section>
                {this.props.pokeArray.map(pokemonObj =>
                    <PokeItem pokemon = {pokemonObj.pokemon} type = {pokemonObj.type_1} attack = {pokemonObj.attack} key = {pokemonObj._id} pokeImage = {pokemonObj.url_image}/>
                )}
            </section>
        )
    }
}