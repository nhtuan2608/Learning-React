import React from 'react';
import './index.css';

class Counter extends React.Component {
    // Constructor với props là thuộc tính public của Component không thể thay đổi chỉ nhận truyền từ ngoài vào để set. 例: 0.1 bên index.js
    constructor(props) {
        super(props);
        // Thuộc tính private không truyền từ ngoài vào được nhưng thay đổi được giá trị dưới dạng Object
        this.state = {seconds: 0, isOn: true}; // Object
        // this.state.seconds = 0; Sai

        // this.stopTimer = this.stopTimer.bind(this); // Binding ở (*1) với onClick của button nếu không sử dụng arrow Function ở (*2)
    }
    incrementCounter() {
        this.setState((prevState) => ({seconds: prevState.seconds += 1}))
    }

    // Lifecycle
    // Phương thức componentDidMount chạy khi component vừa được hiện lên
    componentDidMount() {
        this.timerId = setInterval(() => this.incrementCounter(),1000);
    }
    // Phương thức componentWillUnmount chạy khi không dùng nữa
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    /**
     * Functional if not using  arrow function (*1)
     */
    // stopTimer() {
    //     console.log(this.state.isOn);
    //     this.setState((prevState) => ({isOn: !prevState.isOn}));
    //     console.log(this.state.isOn);
    //     if(this.state.isOn === false) {
    //         this.timerId = setInterval(() => this.incrementCounter(),1000);
    //     } else {
    //         console.log('clear');
    //         clearInterval(this.timerId);
            
    //     }
    // }

    /**
     * Arrow Function to preventing Binding object (*2)
     */
    stopTimer = () => {
        console.log(this.state.isOn);
        this.setState((prevState) => ({isOn: !prevState.isOn}));
        console.log(this.state.isOn);
        if(this.state.isOn === false) {
            this.timerId = setInterval(() => this.incrementCounter(),1000);
        } else {
            console.log('clear');
            clearInterval(this.timerId);
            
        }
    }
    render() {
        return (
            <div>
                <div>
                    {/* Event button */}
                    <button onClick={this.stopTimer}>
                        {/* Toggle // Ternary operator*/}
                        {this.state.isOn ? "Stop" : "Continue"}
                    </button>
                </div>
                <h4>
                    Seconds now:  {this.state.seconds}s
                </h4>
                
            </div>
        )
    }
}
export default Counter;