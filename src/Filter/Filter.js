import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className = "filters">
                <p>Sort By: </p>
                <select onChange = {this.props.handleSortBy}>
                    <option value = "pokemon">Pokemon</option>
                    <option value = "type_1">Type</option>
                    <option value = "weight">Weight</option>
                    <option value = "height">Height</option>
                </select>
                <p>Sort Order: </p>
                <select onChange = {this.props.handleSortOrder}>
                    <option value = "forwards">Forwards</option>
                    <option value = "backwards">Backwards</option>
                </select>
            </div>
        )
    }
}
