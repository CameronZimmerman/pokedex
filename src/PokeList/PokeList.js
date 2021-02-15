import React, { Component} from 'react';
import PokeItem from '../PokeItem/PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <section className = "pokelist">
                <div className = "pokemon">
                    {this.props.pokeArray.map(pokemonObj =>
                        <PokeItem pokemon = {pokemonObj.pokemon} type = {pokemonObj.type_1} weight = {pokemonObj.weight} height = {pokemonObj.height} key = {pokemonObj._id} pokeImage = {pokemonObj.url_image}/>
                    )}
                </div>
                <div className = "page-buttons">
                    {this.props.page !== 1 && <button onClick = {this.props.prev}>Last Page</button>}
                    {this.props.page}
                    {this.props.pokeArray.length > 0 && <button onClick = {this.props.next}>NextPage</button>}
                </div>
            </section>
        )
    }
} 