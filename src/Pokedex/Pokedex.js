import React, { Component } from 'react';
import pokedata from '../pokedata.js';
import PokeList from '../PokeList/PokeList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Filter from '../Filter/Filter.js';

export default class Pokedex extends Component {

    state = {
        pokemon: pokedata,
        sortBy: 'pokemon',
        search: '',
        sortOrder: 'forwards'
    }
    // this will search by pokemon name in searchBar
    handleSearch = (e) => {
        e.preventDefault();
        this.setState({
            search: e.target[0].value
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
        this.setState({
            sortOrder: e.target.value
        })
    }
    
    render() {
        const sortByType = typeof this.state.pokemon[0][this.state.sortBy];
        //sort pokemon based off of state.sortBy
        if(this.state.sortOrder === 'forwards') {
            if (sortByType === 'string') this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
            if(sortByType === 'number') this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]);
        }
        else {
            if (sortByType === 'string') this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
            if(sortByType === 'number') this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        }

        const searchedPokemon = this.state.pokemon.filter(pokemonObj => pokemonObj.pokemon.includes(this.state.search));
        console.log(this.state);

        //set searched array based off of sorted state and pass to pokelist as props
        return (
            <div className = "pokedex">
                <section className = "sidebar">
                    <Filter handleSortBy = {this.handleSortBy} handleSortOrder = {this.handleSortOrder}/>
                    <SearchBar handleSearch = {this.handleSearch} sortBy = {this.state.sortBy}/>
                </section>
                <PokeList pokeArray = {searchedPokemon} />
            </div>
            
        )
    }
}