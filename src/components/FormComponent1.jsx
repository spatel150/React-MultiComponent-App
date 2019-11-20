import React, { Component } from 'react';

class FormComponent1 extends Component {
    
    handleChange = (e) => {
        this.props.call1(e.target.value)
    }

    render() { 
        return (  
            <div>
                <header>
                    <h1 style={headerStyle}> Multi Component Application</h1>
                </header>

                <form>
                    <input type = "text" size="25"
                    value = {this.props.text1}
                    placeholder="Enter Text # 1"
                    onChange= {this.handleChange}
                    />
                </form>
            </div>
        );
    }
}

const headerStyle = {
    background: '#36688D',
    color: '#EDF259',
    textAlign: 'center',
    padding: '15px'
}
 
export default FormComponent1;