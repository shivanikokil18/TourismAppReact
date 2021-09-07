import React from 'react';
import agra from './images/t1.jpg';
import goa from './images/goa.jpeg';
import mumbai from './images/mumbai.jpeg';
import amritsar from './images/amritsar.jpg';
import kerala from './images/kerala.jpg';
import delhi from './images/delhi.jpeg';


function VisitPlace(){
    return(
        <div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div class="card border-info" style={{width: "18rem", height:"22rem"}}>
                            <img src={agra} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title" style={{color: "#2251AF"}}>Agra</h5>
                                <p class="card-text">Historical place, Taj-Mahal is point of attraction.</p>
                                <a href="https://www.britannica.com/place/Agra" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card border-info" style={{width: "18rem", height:"22rem"}}>
                            <img src={goa} class="card-img-top" alt="..." height="200px"></img>
                            <div class="card-body">
                                <h5 class="card-title" style={{color: "#2251AF"}}>Goa</h5>
                                <p class="card-text">Best place to relax. Famous for beaches.</p>
                                <a href="https://www.britannica.com/place/Goa" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card border-info" style={{width: "18rem", height:"22rem"}}>
                            <img src={delhi} class="card-img-top" alt="..." height="200px"></img>
                            <div class="card-body">
                                <h5 class="card-title" style={{color: "#2251AF"}}>Delhi</h5>
                                <p class="card-text">Famous for India gate, Red fort, Qutub Minar</p>
                                <a href="https://www.britannica.com/place/Delhi" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col">
                        <div class="card border-info" style={{width: "18rem", height:"22rem"}}>
                            <img src={amritsar} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title" style={{color: "#2251AF"}}>Amritsar</h5>
                                <p class="card-text">Famous for Golden Temple one of Sikhism's most-visited gurudwaras</p>
                                <a href="https://www.britannica.com/place/Amritsar" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div class="card border-info" style={{width: "18rem", height:"22rem"}}>
                            <img src={kerala} class="card-img-top" alt="..." height="180px"></img>
                            <div class="card-body">
                                <h5 class="card-title" style={{color: "#2251AF"}}>Kerala</h5>
                                <p class="card-text">famous for its geography, tranquil backwaters, unspoiled beaches</p>
                                <a href="https://www.britannica.com/place/Kerala" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div class="card border-info" style={{width: "18rem", height:"22rem"}}>
                            <img src={mumbai} class="card-img-top" alt="..." height="200px"></img>
                            <div class="card-body">
                                <h5 class="card-title" style={{color: "#2251AF"}}>Mumbai</h5>
                                <p class="card-text">City of dreams</p>
                                <a href="https://www.britannica.com/place/Mumbai" class="btn btn-primary">More info</a>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default VisitPlace;