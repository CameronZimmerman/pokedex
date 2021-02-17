import React, { Component } from 'react'
import request from 'superagent';

export default class Details extends Component {
    state = {
        apiPokemon : {}
    }

    componentDidMount() {
        this.fetchPokemon();
    }
    componentDidUpdate(prevProps, prevState) {

    }

    fetchPokemon = async () => {
        let pokemon = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`);

        this.setState({apiPokemon: pokemon.body.results.find((pokemonObj) => pokemonObj.pokemon === this.props.match.params.pokemonName)})
    }
    render() {
        return (
            <div>
                <section>
                    <img src = {this.state.apiPokemon.url_image} alt = {this.state.apiPokemon.pokemon}/>
                </section>
                <section>
                    <p>Name: {this.state.apiPokemon.pokemon}</p>
                    <p>Generation : {this.state.apiPokemon.generation_id}</p>
                    <p>Height: {this.state.apiPokemon.height} feet </p>
                    <p>Weight: {this.state.apiPokemon.weight} lbs</p>
                    <p>Type: {this.state.apiPokemon.type_1}</p>
                    <p>Attack: {this.state.apiPokemon.attack}</p>
                    <p>Defense: {this.state.apiPokemon.defense}</p>
                    <p>HP: {this.state.apiPokemon.hp}</p>
                    <p>Speed: {this.state.apiPokemon.speed} mph</p>
                    <p>Ability 1: {this.state.apiPokemon.ability_1}</p>
                    <p>Ability 2: {this.state.apiPokemon.ability_2}</p>
                    <p>Ability hidden: {this.state.apiPokemon.ability_hidden}</p>
                    <span>Color: </span><div style ={{width: "50px", height: "50px", backgroundColor: this.state.apiPokemon.color_1 }}></div>
                </section>
            </div>
        )
    }
}
