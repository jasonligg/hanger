import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

const DonationPage = (props) => {
  //   const [donateRow, setDonateRow] = useState([]);
  const [userMap, setUserLocation] = useState([]);

  //   useEffect(() => {
  //     fetch('/api')
  //       .then((data) => data.json())
  //       .then((response) => {
  //         const rows = [];
  //         for (let i = 0; i < response.length; i++) {
  //           rows.push(
  //             <ClothingItem
  //               key={`donateRow${i}`}
  //               id={response[i].id}
  //               item={response[i].item}
  //               color={response[i].color}
  //               image={response[i].image}
  //             />
  //           );
  //         }
  //         setDonateRow(rows);
  //       });
  //   }, []);

  // useEffect(
  //   () => {
  //     if (window.navigator.geolocation) {
  //       window.navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //       console.log('give us your location NOW!');
  //     }
  //   },
  //   function showPosition(position) {
  //     userLocation = [position.coords.longitude, position.coords.latitude];
  //     setUserLocation(userLocation);
  //   },
  //   []
  // );

  // mapboxgl.accessToken =
  //   'pk.eyJ1Ijoic2dvbGRmYXJiMzM5MCIsImEiOiJjanlnODBvdjQwMGVoM2Jtc21nbGs3eWoxIn0.lLT4kAF2fiiv2Ey-h-5T-A';
  // let map = new mapboxgl.Map({
  //   container: 'map', // Container ID
  //   style: 'mapbox://styles/mapbox/streets-v11', // Map style to use
  //   center: [userMap[0], userMap[1]], // Starting position [lng, lat]
  //   zoom: 12, // Starting zoom level
  // });
  // let marker = new mapboxgl.Marker() // initialize a new marker
  //   // .setLngLat([-122.25948, 37.87221]) // Marker [lng, lat] coordinates
  //   .setLngLat([userMap[0], userMap[1]])
  //   .addTo(map); // Add the marker to the map

  // let geocoder = new MapboxGeocoder({
  //   // Initialize the geocoder
  //   accessToken: mapboxgl.accessToken, // Set the access token
  //   placeholder: 'Search for donation centers in NYC',
  //   mapboxgl: mapboxgl, // Set the mapbox-gl instance
  //   marker: false, // Do not use the default marker style
  //   // bbox: [-122.30937, 37.84214, -122.23715, 37.89838], // Boundary for Berkeley
  //   // proximity: {
  //   // longitude: -122.25948,
  //   // latitude: 37.87221
  //   // } // Coordinates of UC Berkeley
  // });

  // // Add the geocoder to the map
  // map.addControl(geocoder);
  // // After the map style has loaded on the page,
  // // add a source layer and default styling for a single point
  // map.on('load', function () {
  //   map.addSource('single-point', {
  //     type: 'geojson',
  //     data: {
  //       type: 'FeatureCollection',
  //       features: [],
  //     },
  //   });

  //   map.addLayer({
  //     id: 'point',
  //     source: 'single-point',
  //     type: 'circle',
  //     paint: {
  //       'circle-radius': 10,
  //       'circle-color': '#448ee4',
  //     },
  //   });

  //   // Listen for the `result` event from the Geocoder
  //   // `result` event is triggered when a user makes a selection
  //   //  Add a marker at the result's coordinates
  //   geocoder.on('result', function (e) {
  //     map.getSource('single-point').setData(e.result.geometry);
  //   });
  // });

  return (
    <div className="main">
      <img
        id="Textlogo"
        src="./src/Images/HangerTextLogo.png"
        alt="hangerTextLogo"
      />
      <span>These items Haven't Been Worn in The Last 30 Days</span>
      <div className="DonationDisplay">
        <div className="columnTitlesDonate">
          <span>Item</span>
          <span>Type</span>
          <span>Color</span>
          <span>Image</span>
          <span>Active/Donate</span>
          <span>Worn</span>
        </div>
        {/* <div className="rows">{donateRow}</div> */}
      </div>
      <button>View Donation Centers</button>
      <div id="map"></div>
    </div>
  );
};

export default DonationPage;
