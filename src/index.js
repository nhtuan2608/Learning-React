import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// lesson1_CmpAndProps
// Component as Class or Functional
import UserInfo from './lesson1_CmpAndProps';
// lesson2_State_LifeCycle_EventButton
import Counter from './lesson2_State_LifeCycle_EventButton';
// lesson3_Render_Following_Condition
import LoginComponent from './lesson3_Render_Following_Condition';
// lesson3.1_Changing_By_State_And_Action
import LoginComponentByAction from './lesson3.1_Changing_By_State_And_Action';
// lesson4_List_Keys_For_Rendering_Components
import ListComponent from './lesson4_List_Keys_For_Rendering_Components';
// lesson5_Form
import FormConponent from './lesson5_Form';
// lesson6_Handle_Multiple_Input
import FormConponent2 from './lesson6_Handle_Multiple_Input';
// lesson7_Component_And_Inheritance
import PaneComponent from './lesson7_Component_And_Inheritance';
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
// var listMesg = ['New York', 'Tokyo'];
// ReactDOM.render(<LoginComponentByAction newMessages={listMesg} />, document.getElementById('root'));

/**
 * lesson3.1_Changing_By_State_And_Action
 */
// var listMesg = ['New York', 'Tokyo'];
// ReactDOM.render(<LoginComponentByAction />, document.getElementById('root'));

/**
 * lesson4_List_Keys_For_Rendering_Components
 */
// var listCity = ['New York', 'Tokyo', 'Hanoi', 'LA'];
// var listObj = [
//     {
//         id: 'x001',
//         name: 'New York',
//         title: 'Capital of USA'
//     },
//     {   
//         id: 'x002',
//         name: 'Tokyo',
//         title: 'Capital of Japan'
//     },
//     {
//         id: 'x003',
//         name: 'Hanoi',
//         title: 'Capital of Vietnam'
//     }
// ]
// const layout = <div> 
//     <ListComponent items={listCity} /> 
//     <ListComponent items={listObj} /> 
// </div>
// ReactDOM.render(layout, document.getElementById('root'));

/**
 * lesson5_Form
 */
// ReactDOM.render(<FormConponent />, document.getElementById('root'));

/**
 * lesson6_Handle_Multiple_Input
 */
// ReactDOM.render(<FormConponent2 />, document.getElementById('root'));

/**
 * lesson7_Component_And_Inheritance
 */
function UpComponent(props) {
    return (
        <div className='clsUp'>
            Section Up
        </div>
    )
}
function DownComponent(props) {
    return (
        <div className='clsDown'>
            Section Down
        </div>
    )
}
ReactDOM.render(<PaneComponent up={<UpComponent />} 
                            down={<DownComponent />}>
                            <div className='clsChild'>
                                Thẻ con của component
                            </div>
</PaneComponent>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
