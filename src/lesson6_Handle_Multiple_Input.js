import React from 'react';
import './index.css';

class FormConponent2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', age: 0};
    }
    handleChange = (event) => {
        this.setState({
            // event.target.name : name ở đây là name của các thể input nếu có event
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (event) => {
        alert('Submit ' + this.state.name + ', ' + this.state.age);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Your name:
                        <input type="text" value={this.state.name} name='name' onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <label>
                        Your age:
                        <input type="number" value={this.state.age} name='age' onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit your name"/>
                </form>
            </div>
        )
    }
}
export default FormConponent2;