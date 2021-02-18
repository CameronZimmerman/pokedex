import React, { Component } from 'react';
import PokeList from '../PokeList/PokeList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import Filter from '../Filter/Filter.js';
import request from 'superagent';

export default class Pokedex extends Component {
    state = {
        pokemon: [],
        sortBy: 'pokemon',
        search: '',
        sortOrder: 'asc',
        page: 1,
        lastPage: 0,
        perPage: 50,
        loading: false,
    }

    componentDidMount() {
        console.log(this.props);
        this.fetchPokemon();
        console.log(this.state.pokemon);
    }

    // this will search by pokemon name in searchBar
    handleSearch = async (e) => {
        e.preventDefault();
        await this.setState({
            search: e.target[0].value,
            page: 1,
        })
        await this.fetchPokemon();

    }
    // this will set sortby to the users category choice in a dropdown
    handleSortBy = async (e) => {
        await this.setState({
            sortBy: e.target.value,
            page: 1,
        })
       await this.fetchPokemon();
    }
    // this will invert search order
    handleSortOrder = async (e) => {
        await this.setState({
            sortOrder: e.target.value,
            page: 1,
        })
       await this.fetchPokemon();
    }
    handleNextPageChange = async () => {
        if(this.state.pokemon !== []) await this.setState({page: this.state.page + 1})
        await this.fetchPokemon();
        
    }

    handlePreviousPageChange = async () => {
        if(this.state.page > 1) await this.setState({page: this.state.page - 1})
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({loading:true})
        let url = `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.search}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}&page=${this.state.page}&perPage=${this.state.perPage}`
        let pokeData = await request.get(url);
        await this.setState({pokemon : pokeData.body.results, loading: false, lastPage: Math.ceil(pokeData.body.count / this.state.perPage)});
    }
    
    render() {
        // const sortByType = typeof this.state.pokemon[0][this.state.sortBy];
        // //sort pokemon based off of state.sortBy
        // if(this.state.sortOrder === 'asc') {
        //     if (sortByType === 'string') this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]));
        //     if(sortByType === 'number') this.state.pokemon.sort((a, b) => a[this.state.sortBy] - b[this.state.sortBy]);
        // }
        // else {
        //     if (sortByType === 'string') this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]));
        //     if(sortByType === 'number') this.state.pokemon.sort((a, b) => b[this.state.sortBy] - a[this.state.sortBy]);
        // }

        // const searchedPokemon = this.state.pokemon.filter(pokemonObj => pokemonObj.pokemon.includes(this.state.search));
        // console.log(this.state);

        //set searched array based off of sorted state and pass to pokelist as props
        return (
            <div className = "pokedex">
                <section className = "sidebar">
                    <Filter handleSortBy = {this.handleSortBy} handleSortOrder = {this.handleSortOrder}/>
                    <SearchBar handleSearch = {this.handleSearch} sortBy = {this.state.sortBy}/>
                </section>
                <PokeList pokeArray = {this.state.pokemon} page = {this.state.page} next = {this.handleNextPageChange} prev = {this.handlePreviousPageChange} loading = {this.state.loading} lastPage = {this.state.lastPage}/>
            </div>
            
        )
    }
}