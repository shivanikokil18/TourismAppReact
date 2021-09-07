import React, { useEffect, useState } from 'react';
import { getPlace } from "../apicalls/placeApi";
import PlaceList from './PlaceList';
import {Link} from 'react-router-dom';

function Places() {
//class Places extends React.Component{
    //hooks demo
    //useState
    const[places, setPlaces] = useState([]);

    useEffect(() => {
        getPlace().then((_places)=>setPlaces(_places));
    },[])

    // state = {
    //     placedata:[
    //         {"id":1, "title":"Goa","ptOfAttraction":"Beaches"},
    //         {"id":2, "title":"Jaipur","ptOfAttraction":"Amer Fort"},
    //         {"id":3, "title":"Agra","ptOfAttraction":"Taj-Mahal"},
    //         {"id":4, "title":"Amritsar","ptOfAttraction":"Golden Temple"},


    //     ],
    // };

        return(
            <>
                <h2>India Travels</h2>
                {/* <table className="table table-striped">
                    <thead className="table-primary">
                        <tr>
                            <th>Title</th>
                            <th>Point of attraction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.placedata.map((place)=>
                            (
                            <tr>
                                <td>{place.title}</td>
                                <td>{place.ptOfAttraction}</td>
                            </tr>
                            )
                        )
                        }
                    </tbody>

                </table> */}

                <Link className="btn btn-warning" to="/place">Add Place</Link>
                <br />
                <br />
                <PlaceList places={places}/>
            </>
        );
    }


export default Places;