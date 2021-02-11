import React, { Component } from 'react';
import pokedata from '../pokedata.js';
import PokeList from '../PokeList/PokeList.js';

export default class Pokedex extends Component {

    state = {
        pokemon: pokedata,
        sortBy: '',
        filter: '',
        sortOrder: 'forwards'
    }
    // this will filter by pokemon name in searchBar
    handleFilter = (e) => {
        this.setState({
            filter: e.target.value
        })
    }
    // this will set sortby to the users category choice in a dropdown
    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }
    // this will invert search order
    handleSortOrder = (e) => {

    }
    
    render() {
        const sortByType = typeof this.state.pokemon[0][this.state.sortBy];
        console.log(sortByType);
        //sort pokemon based off of state.sortBy
        if(this.state.sortOrder === 'forwards') {
            if (sortByType === 'string') this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
            if(sortByType === 'number') this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]);
        }
        else {
            if (sortByType === 'string') this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
            if(sortByType === 'number') this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        }

        const filteredPokemon = this.state.pokemon.filter(pokemonObj => pokemonObj.pokemon.includes(this.state.filter));

        console.log(filteredPokemon);
        //set filtered array based off of sorted state and pass to pokelist as props
        return (
            <div>
                <p>SideBar</p>
                <PokeList pokeArray = {filteredPokemon} />
            </div>
            
        )
    }
}