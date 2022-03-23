const dotenv = require('dotenv');
dotenv.config();
// const MAP_TOKEN = process.env.MAPBOX_TOKEN;
const MAP_TOKEN =
  'pk.eyJ1IjoibW9uaWtha3IiLCJhIjoiY2wweTZ6NjYyMXF2bTNpbm1sb2FzYnU1ayJ9.82jjXRoyf1BwTpQkFRmTZw';

module.exports.createGeolocationUrl = (addressObj = {}) => {
  let url;
  if (addressObj.country) {
    if (addressObj.city) {
      if (addressObj.postalCode && addressObj.street) {
        if (addressObj.numberOfHouse) {
          url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressObj.country}%2C${addressObj.postalCode}%2C${addressObj.city}%2C${addressObj.street}%2C${addressObj.numberOfHouse}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
        } else {
          url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressObj.country}%2C${addressObj.postalCode}%2C${addressObj.city}%2C${addressObj.street}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
        }
      } else if (addressObj.postalCode) {
        url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressObj.country}%2C${addressObj.postalCode}%2C${addressObj.city}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
      } else if (addressObj.street) {
        url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressObj.country}%2C${addressObj.city}%2C${addressObj.street}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
      } else {
        url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressObj.country}%2C${addressObj.city}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
      }
    } else {
      url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addressObj.country}.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
    }
  } else {
    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/Polska.json?limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&access_token=${MAP_TOKEN}`;
  }

  return url;
};
