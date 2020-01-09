import React from 'react';
import './index.css';

class PaneComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.up}
                {this.props.down}
                {this.props.up}
            </div>
        )
    }
}
export default PaneComponent;