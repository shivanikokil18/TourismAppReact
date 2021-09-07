import React from 'react';

class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0
        };
        console.log("Constructor please")
    }
    updatecounter(){
        this.setState((prevState,props)=>{
            return {counter: prevState.counter+1}
        })
    }

    render(){
        return(
        <>
        <br />
        <h1 style={{color: "#2F7887"}}>Incredible India</h1>
        <p>India has a myriad of landscapes, great heritage and culture, varied flora and fauna. 
            The country is the most preferred tourist destinations for tourists from all across the world for its picturesque landscapes, spectacular waterfalls, habitat of the country's largest tiger reserve and home to the warmest people on earth.</p>
        <h2 style={{color: "#2F7887"}}>Click here</h2>
        <button style={{marginBottom:"10px", marginTop: "5px"}} className="btn btn-primary" onClick={()=>this.updatecounter()}> {" "} Button Hit Count is {this.state.counter}</button>
        </>
        );
    }

    componentDidMount(){
        console.log("Component mounted on DOM");
    }

    componentDidUpdate(){
        console.log("Component updating");
    }

    componentWillUnmount(){
        console.log("Component unmounting");
    }
}

About.defaultProps={
    name: "GoTours",
    tag: "Enjoy travelling"
}

export default About;