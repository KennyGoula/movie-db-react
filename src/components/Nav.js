import React, { Component } from 'react';
import fire from '../config/Fire';
import Login from './Login';

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            user : {},
        }
    }
    componentDidMount() {
        this.authListener();
    }
    authListener() {
    fire.auth().onAuthStateChanged((user)=> {
        if(user) {
            this.setState({ user })
        }else{
            this.setState({ user: null })
        }
    });
    }
}
const Nav = () => {


    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#" className="brand-logo">Movie DB React</a>
                <Login/>
            </div>
        </nav>
    )
}



export default Nav;