import React from 'react';
import './index.css';

// Component con
function ListItems(props) {
    return <li>{props.value}</li>;
}

// Component cha
class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.list = props.items.map(
            // Không nên check typeof(item) === 'object'
            (item, index) => ((typeof(item) === 'string') ? <ListItems key={item} value={index.toString() + "- " + item + " city."}/> : <ListItems key={item.id} value={index.toString() + "- " + item.name + " city, " + item.title }/>)
        ); 
    }

    render() {
        return (
            <ul>
                {this.props.items.map(item => console.log(item + ", " + typeof(item)))}
                {this.list}
            </ul>
        )
    }
}

export default ListComponent;