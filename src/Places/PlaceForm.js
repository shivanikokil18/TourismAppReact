import React from 'react';
import PropTypes from "prop-types";

function PlaceForm(props){
    let containerClass = "form-group";
    if (props.errors.length > 0){
        containerClass += "has-error";
    }
    return(
        <form onSubmit={props.onSubmit}> 
            <div className={containerClass}>
                <label>Enter Place Name</label>
                <div className="field">
                    <input 
                        id="title"
                        type="text"
                        name="title"
                        className="form-control"
                        onChange={props.onChange}
                        value={props.place.title}>
                    </input>
                </div>
                {props.errors.title && (
                    <div className="alert alert-danger">{props.errors.title}</div>
                )}
            </div>
            <br />
            <div className={containerClass}>
                <label>Famous for</label>
                <div className="field">
                    <input 
                        id="ptofattraction"
                        type="text"
                        name="ptofattraction"
                        className="form-control"
                        onChange={props.onChange}
                        value={props.place.ptofattraction}>
                    </input>
                </div>
                {props.errors.ptofattraction && (
                    <div className="alert alert-danger">{props.errors.genre}</div>
                )}
            </div>
            <br/>
            <button type="submit" className="btn btn-outline-success" disabled={props.saving}>
                {props.saving ? "Saving.." : "Save"}
            </button>
            <br />
            <br />

        </form>
    )
}

PlaceForm.propTypes = {
    place: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};
  

export default PlaceForm;