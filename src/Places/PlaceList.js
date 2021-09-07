import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PlaceList(props) {
    return (
        <table className="table">
            <thead className="table-primary">
                <tr>
                <th>Title</th>
                <th>Point of attraction</th>
                </tr>
            </thead>
            <tbody>
                {props.places.map((place)=>
                {
                    return(
                        <tr >
                            <Link to={"/place/" +place.slug} >{place.title}</Link>
                            <td>{place.ptofattraction}</td>
                        </tr>
    
                    );
                })}
            </tbody>
        </table>
    );
}

PlaceList.prototype = {
    places: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            ptOfAttraction: PropTypes.string.isRequired,
        })
    ).isRequired,
};

PlaceList.defaultProps = {
    places: [],
};

export default PlaceList;