import React, {Component} from 'react';
import fire from '../config/Fire'

class Login extends Component {
    constructor(props) {
        super(props)
        

    }
    state = {
        logOn: false,
        signOn: false,
        showLog: true,
        showSign: true,
    }

    toggleLogOn = () => {
        this.setState({
            logOn: true,
            showLog: false,
        })
    }
    toggleLogOff = () => {
        this.setState({
            logOn: false,
            showLog: true,
        })
    }

    toggleSignOn = () => {
        this.setState({
            signOn: true,
            showSign: false,
        })
    }
    toggleSignOff = () => {
        this.setState({
            signOn: false,
            showSign: true,
        })
    }

    showLog() {
        this.setState({
            showLog: false
        })
    }

    showSign() {
        this.setState({
            showSign: false,
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){

        return (
                <ul className="nav">
                    {this.state.showLog && this.state.showSign?
                    <div>
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.toggleLogOn} href="#">Login</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.toggleSignOn} href="#">Sign In</a>
                        </li>
                    </div> : null}
                    {this.state.logOn && (
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.toggleLogOff} href="#">Login</a>
                            </li>
                            <li className="nav-item">
                                <input type="text" value="Username" />
                            </li>
                            <li className="nav-item">
                                <input type="text" value="Password" />
                            </li>
                            <li className="nav-item">
                                <button type="submit" className="btn">Submit</button>
                            </li>
                        </ul>
                    )}
                    {this.state.signOn && (
                        <ul>
                            <li className="nav-item">
                                <a className="nav-link" onClick={this.toggleSignOff} href="#">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <input type="text" value="Username"/>
                            </li>
                            <li className="nav-item">
                                <input type="text" value="Password"/>
                            </li>
                            <li className="nav-item">
                                <button type="submit" className="btn">Submit</button>
                            </li>
                        </ul>
                    )}
                </ul>
        )
    }

}


export default Login