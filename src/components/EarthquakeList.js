import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes';
// data = [
//   {
//     properties:{
//       place: "here",
//       time: "today"
//     }
//   },
//   {
//     properties:{
//       place: "class",
//       time: "today"
//     }
//   },
//   {
//     properties:{
//       place: "upstairs",
//       time: "today"
//     }
//   }
// ]
// const justProperties = data.map((info) =>{
//   return info.properties;
// })
// justPlaces = ["here", "class", "upstairs"]
const earthquake = earthquakes.features.map((earthquake) => {
  return (
    <div className="col-sm-6" key={earthquake.id}>
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{earthquake.properties.place}</h4>
          <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
          <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.properties.time).format('llll')}</h6>
          <p className="card-text">Coordinates:{earthquake.geometry.place}</p>

          <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>

        </div>
      </div>
    </div>
  )
})

class EarthquakeList extends Component {
  render() {
    return (
      <div className="quake-list">

        <div className="row">

          {earthquake}

        </div>

      </div>
    )
  }
}







export default EarthquakeList;
