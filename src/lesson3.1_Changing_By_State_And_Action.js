import React from 'react';
import './index.css';
// =============================================================
// Sử dụng lại lesson3 sử dụng action thay đổi mesg (state) thay vì truyền mảng(biến) vào component
class LoginComponentByAction extends React.Component {
    listMesg = [];
    constructor(props) {
        super(props);
        this.state = {status: 'Logged out',isLoggedIn: false, newMessages: []};
    }
    handleLogOut = () => {
        this.setState({status: 'Logged out', isLoggedIn: false, newMessages: []});
    }
    handleLogIn = () => {
        this.setState({status: 'Logged in', isLoggedIn: true, newMessages: this.listMesg});
        // this.setState({status: 'Logged in', isLoggedIn: true});
    }
    
    SendingMessage = () => {
        var mesg = this.listMesg.length + 1;
        console.log(mesg);
        this.listMesg.push(mesg);
        console.log(this.listMesg);
    }
    DeleteMessage = () => {
        this.listMesg.length = 0;
        this.forceUpdate();
    }
    render() {
        let customButtonLoggin = null;
        let customButtonSendMesg = <button onClick={this.SendingMessage}>Send Message</button>;
        if(this.state.isLoggedIn) {
            customButtonLoggin = <button onClick={this.handleLogOut}>Logout</button>;
        } else {
            customButtonLoggin = <button onClick={this.handleLogIn}>Log in</button>;
        }
        // Ternary operator && inline HTML
        let status = this.state.isLoggedIn ? <h3>{this.state.status}</h3> : <h3>{this.state.status}</h3>;
        
        return (
            <div>
                {status}
                {}
                {/* Inine if with Logical && Operator */}
                {/* Gọi bên index.js */}
                {this.state.newMessages.length > 0 && this.state.isLoggedIn === true &&
                    <div>
                        <h4>
                            You have {this.state.newMessages.length} new messages.
                            <br/>
                            <button onClick={this.DeleteMessage}>Delete Notifications</button>
                        </h4>
                    </div>
                }
                {customButtonLoggin}
                {this.state.isLoggedIn === false && customButtonSendMesg}
            </div>
        )
    }
}

export default LoginComponentByAction;