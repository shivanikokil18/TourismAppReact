import React from 'react';
import PropTypes from "prop-types";
function DeletePlace(props) {
  let containerClass = "form-group";
  
  return (
    <>
    <form >
      
      <input
        type="button"
        value="Delete Place"
        className="btn btn-danger"
        onClick={props.onDelete}
      />
    </form>
    </>
  );
}
DeletePlace.propTypes = {
  room: PropTypes.object.isRequired,
  onDelete:PropTypes.func.isRequired
};
export default DeletePlace;