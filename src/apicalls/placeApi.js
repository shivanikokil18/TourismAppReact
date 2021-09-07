import {places} from '../Server/db.json'
import { ResponseChk, ErrorChk } from "./chkApi";
let url = process.env.REACT_APP_API_URL + "/places/";

export function getPlace(){
    return fetch(url).then(ResponseChk).catch(ErrorChk);
}

export function getPlacebySlug(slug) {
    return fetch(url + "?slug=" + slug)
      .then((response) => {
        if (!response.ok)
          throw new Error("Place by slug cannot be retrieved ..error");
        return response.json().then((places) => {
          if (places.length !== 1)
            throw new Error("Cannot find the place.." + slug);
          return places[0];
        });
      })
      .catch(ErrorChk);
  }
  
  export function savePlace(place) {
    return fetch(url + (place.id || ""), {
      method: place.id ? "PUT" : "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...place,
      }),
    })
      .then(ResponseChk)
      .catch(ErrorChk);
  }
  
  export function deletePlace(placeId) {
    return fetch(url + placeId, {
      method: "DELETE",
    })
      .then(ResponseChk)
      .catch(ErrorChk);
  }
  



