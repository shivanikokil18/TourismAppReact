import React, { useEffect, useState } from "react";
import PlaceForm from './PlaceForm'
import * as placeApi from '../apicalls/placeApi'

const PLaceDetail = (props) => {
    const [errors, setErrors] = useState({});
    const [place, setPlace] = useState({
      id: null,
      title: "",
      ptofattraction: "",
    });
    const [saving, setSave] = useState(false);

    // useEffect(() => {
    //     const slug = props.match.params.slug; 
    //     if (slug) {
    //       placeApi.getPlacebySlug(slug).then((_place) => setPlace(_place));
    //     }
    // }, []);

    function ValidForm(params) {
        const _errors = {};
        if (!place.title) _errors.title = "Please enter the place title";
        if (!place.ptofattraction) _errors.ptofattraction = "Please enter the point of attraction";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
      }
    
      //spread operator ...
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
  
    return (
        <>
            <h3>Enter place information here</h3>
            <hr />
            <br />
            <PlaceForm
                errors={errors}
                place={place}
                saving={saving}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
};
export default PLaceDetail;