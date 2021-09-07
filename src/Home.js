import React from 'react';
import './App.css';
//function component
function Home(){
    return (
        <div className="jumbotron" style={{scrollBehavior:"unset"}}>
            <h1 style={{color: "#ffffff", paddingTop:"40px"}} className="text-center">Welcome to TouristClub!!!</h1>
            <h4 style={{color: "#ffffff", paddingBottom:"625px"}} className="text-center">Best place for travel enthusiasts.</h4>
            <hr />
        </div>

    );
}

export default Home;