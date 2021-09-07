import React from 'react';

class FormDemo extends React.Component{

    constructor(props){
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({value: evt.target.value});
    }

    handleSubmit(evt){
        console.log("Controlled by react" + this.state.value);
        evt.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>  
                <label>
                    User name:
                </label>
                <input type="text" value={this.state.value} onChange={this.handleChange}>
                </input>
                <input type="submit" value="Save"></input>
            </form>
        );
    }
}

export default FormDemo;