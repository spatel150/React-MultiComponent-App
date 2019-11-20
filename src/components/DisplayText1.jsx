import React, { Component } from 'react';
import { thisExpression } from '@babel/types';

class DisplayText1 extends Component {

    render() { 
        return (  
            <div>
                <h1>Display Text for Form 1: {this.props.text1} </h1>
            </div>
        );
    }
}
 
export default DisplayText1;
