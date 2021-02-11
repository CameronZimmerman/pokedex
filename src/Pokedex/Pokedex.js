import React, { Component } from 'react';
import pokedata from '../pokedata.js';

export default class Pokedex extends Component {

    state = {
        pokemon: pokedata,
        sortBy: '',
        filter: '',
        sortOrder: 'forwards'
    }

    handleFilter = () => {
        
    }

    handleSortBy = () => {

    }

    handleSortOrder = () => {

    }
    
    render() {
        return (
            <p>Pokedex</p>
        )
    }
}