import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div></div>
                <h1>Welcome to my Pokedex</h1>
                <ul>
                    {this.props.location.pathname !== "/" && <li><Link to="/">Home</Link></li>}
                    {this.props.location.pathname !== "/pokedex" && <li><Link to="/pokedex">Pokedex</Link></li>}
                </ul>
            </header>
        )
    }
}

export default withRouter(Header);
