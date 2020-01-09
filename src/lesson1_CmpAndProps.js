import React from 'react';
import { render } from '@testing-library/react';
/** 
 * Functional component
*/
// function UserInfo(props) {
//     return (
//         <div>
//             <div>
//                 <h5>
//                     username: {props.name}
//                 </h5>
//             </div>
//             <div>
//                 <h5>
//                     age: {props.age}
//                 </h5>
//             </div>
//         </div>
//     );
// }

/** 
 * Class component
*/
class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h5>
                        username: {this.props.name}
                    </h5>
                </div>
                <div>
                    <h5>
                        age: {this.props.age}
                    </h5>
                </div>
            </div>
        )
    }
}
export default UserInfo;