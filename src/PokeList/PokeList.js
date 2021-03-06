import React, { Component} from 'react';
import PokeItem from '../PokeItem/PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <section className = "pokelist">
                <div className = "pokemon">

                { this.props.loading? <img src = "mew-gif.gif" alt = "mew"/> : this.props.pokeArray.map(pokemonObj =>
                        <PokeItem pokemon = {pokemonObj.pokemon} type = {pokemonObj.type_1} weight = {pokemonObj.weight} height = {pokemonObj.height} key = {pokemonObj._id} pokeImage = {pokemonObj.url_image}/>
                    )}
                    
                </div>
                <div className = "page-buttons">
                    <button disabled = {this.props.page === 1} onClick = {this.props.prev}>Last Page</button>
                    {this.props.pokeArray.length > 0 && <span>{this.props.page}</span>}
                    <button disabled = {this.props.page >= this.props.lastPage} onClick = {this.props.next}>NextPage</button>
                </div>
            </section>
        )
    }
} 