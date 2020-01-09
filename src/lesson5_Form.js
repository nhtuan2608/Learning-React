import React from 'react';
import './index.css';

class FormConponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textData: ''};
    }
    handleChange = (event) => {
        this.setState({textData: event.target.value});
    }
    handleSubmit = (event) => {
        alert('Submit ' + this.state.textData);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Your name:
                        <input type="text" value={this.state.textData} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit your name"/>
                </form>
            </div>
        )
    }
}
export default FormConponent;