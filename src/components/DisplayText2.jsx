import React, { Component } from 'react';

class DisplayText2 extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Display Text for Form 2: {this.props.text2} </h1>
            </div>
         );
    }
}
 
export default DisplayText2;