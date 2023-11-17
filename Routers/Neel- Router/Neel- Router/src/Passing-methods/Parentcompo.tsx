import React, {  Component } from 'react'
//import Classtoprops from './Classtoprops';
import Functiontoprops from './Functiontoprops';
// interface ClasstopropsProps {
//     callmethod: (child: string) => void;
// }

export default class Parentcompo extends Component {
//why perameter not working
    Parentmethod = () => 
    { alert('This is parent'); }
   
    render() {
        return (
            // callmethod ae attribute che
            <div>
                {/* <Classtoprops callmethod ={this.Parentmethod} /> */}
                 
                <Functiontoprops callmethod ={this.Parentmethod} />
                 
            </div>
        )
    }
}


