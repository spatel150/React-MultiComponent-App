import React, { Component } from 'react';

class FormComponent3 extends Component {
    
    handleChange = (e) => {
        this.props.call3(e.target.value)
    }

    render() { 
        return (  
            <div>

                <h1> </h1>

                <form>
                    <input type = "text" size="25"
                    value = {this.props.text3}
                    placeholder="Enter Text # 3"
                    onChange= {this.handleChange}
                    />
                </form>
            </div>
        );
    }
}
 
export default FormComponent3;