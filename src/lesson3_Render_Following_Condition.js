import React from 'react';
import './index.css';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {status: 'Logged out',isLoggedIn: false};
    }
    handleLogOut = () => {
        this.setState({status: 'Logged out', isLoggedIn: false});
    }
    handleLogIn = () => {
        this.setState({status: 'Logged in', isLoggedIn: true});
    }
    render() {
        let customButton = null;
        if(this.state.isLoggedIn) {
            customButton = <button onClick={this.handleLogOut}>Logout</button>;
        } else {
            customButton = <button onClick={this.handleLogIn}>Log in</button>
        }
        // Ternary operator && inline HTML
        let status = this.state.isLoggedIn ? <h3>{this.state.status}</h3> : <h3>{this.state.status}</h3>;
        
        return (
            <div>
                {status}
                {/* Inine if with Logical && Operator */}
                {/* Gọi bên index.js */}
                {this.props.newMessages.length > 0 && this.state.isLoggedIn === true &&
                    <h4>
                        You have {this.props.newMessages.length} new messages.
                    </h4>
                }
                {customButton}
            </div>
        )
    }
}

export default LoginComponent;