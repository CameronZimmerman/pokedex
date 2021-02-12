import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
          <form onSubmit = {this.props.handleSearch}>
              <input placeholder = "search" name = "searchbar"/>
              <button value = "Submit">Search?</button>
          </form>
        )
    }
}
