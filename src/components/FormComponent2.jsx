import React, { Component } from 'react';

class FormComponent2 extends Component {
    
    handleChange = (e) => {
        this.props.call2(e.target.value)
    }

    render() { 
        return (  
            <div>
                <form>
                    <input type ="text" size="25"
                    value = {this.props.text2}
                    placeholder= "Enter Text # 2"
                    onChange= {this.handleChange}
                    />
                </form>
            </div>
        );
    }

}

const headerStyle = {

}
 
export default FormComponent2;