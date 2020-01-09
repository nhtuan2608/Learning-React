import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// Component as Class or Functional
import UserInfo from './lesson1_CmpAndProps';
// State And Life Cycle
import Counter from './lesson2_State_LifeCycle_EventButton';
// Render Following Condition
import LoginComponent from './lesson3_Render_Following_Condition';
// Changing_By_State_And_Action
import LoginComponentByAction from './lesson3.1_Changing_By_State_And_Action';
// List_Keys_For_Rendering_Components
import ListComponent from './lesson4_List_Keys_For_Rendering_Components';
// import * as serviceWorker from './serviceWorker';

/**
 * JSX trực tiếp
 */

 // Object user
var user = {
    name: 'Tuan',
    age: 23
};
// JSX
const element = <div>
    <div>
        <h5>
            username: {user.name}
        </h5>
        
    </div>
    <div>
        <h5>
            age: {user.age}
        </h5>
    </div>
</div>
/**
 * Run JSX trực tiếp
 */
// ReactDOM.render(element , document.getElementById('root'));

/**
 * lesson1_CmpAndProps
 * Run Component UserInfo
 * 例: 0.1
 */
// ReactDOM.render(<UserInfo name='Khanh' age='25' />, document.getElementById('root'));

/**
 * lesson2_StateAndLifeCycle
 */
// ReactDOM.render(<Counter />, document.getElementById('root'));

/**
 * lesson3_Render_Following_Condition
 */
var listMesg = ['New York', 'Tokyo'];
// ReactDOM.render(<LoginComponentByAction newMessages={listMesg} />, document.getElementById('root'));

/**
 * lesson3.1_Changing_By_State_And_Action
 */
// var listMesg = ['New York', 'Tokyo'];
ReactDOM.render(<LoginComponentByAction />, document.getElementById('root'));

/**
 * List_Keys_For_Rendering_Components
 */
var listCity = ['New York', 'Tokyo', 'Hanoi', 'LA'];
// ReactDOM.render(<ListComponent items={listCity} />, document.getElementById('root'));

var listObj = [
    {
        id: 'x001',
        name: 'New York',
        title: 'Capital of USA'
    },
    {   
        id: 'x002',
        name: 'Tokyo',
        title: 'Capital of Japan'
    },
    {
        id: 'x003',
        name: 'Hanoi',
        title: 'Capital of Vietnam'
    }
]
const layout = <div> 
    <ListComponent items={listCity} /> 
    <ListComponent items={listObj} /> 
</div>
// ReactDOM.render(layout, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
