import React, { useEffect, useState } from "react";
import DeletePlace from "../Places/DeletePlace";
import * as placeApi from '../apicalls/placeApi';

const Details = (props) => {
  const [errors, setErrors] = useState({});
  const [place, setPlace] = useState({
    id: null,
    title: "",
    ptofattraction: "",
  });
  const [saving, setSave] = useState(false); 
  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      placeApi.getPlacebySlug(slug).then((_place) => setPlace(_place));
    }
  }, []); 
  function ValidForm(params) {
    const _errors = {};
    if (!place.title) _errors.title = "Please enter the place title";
    if (!place.ptofattraction) _errors.ptofattraction = "Please enter the point of attraction";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }
function handleChange({ target }) {
    setPlace({
      ...place,
      [target.name]: target.value,
    });
  }
function handleSubmit(evt) {
    evt.preventDefault();
    if (!ValidForm()) return;
    setSave(true);
    placeApi.savePlace(place).then(() => {
      props.history.push("/places");
    });
  }
  function handleDelete(evt) {
    evt.preventDefault();
    placeApi.deletePlace(place.id).then(() => {
      props.history.push("/places");
      alert("Place deleted");
    });
  }
  return (
    <>    
        <h2>{place.title}</h2>
        <p>{place.ptofattraction}</p>

      <DeletePlace
        errors={errors}
        place={place}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Details;