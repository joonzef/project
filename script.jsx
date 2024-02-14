let status;
let locationData = document.getElementById('location');
const succes = (position) => {
    console.log(position);
    showCity(position); // Call showCity function here
};
    
const error = () => {
    status.textContent = 'Unable to retrieve your location';
}

navigator.geolocation.watchPosition(succes, error); 

function showCity(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBaUUCtCd_g6QPBgPWcjSgog7wvZGR6Mpk`;
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {

        const city = data.results[0].address_components.find((component) =>
          component.types.includes("locality")
        ).long_name;
        city = locationData.textContent = city;
      })
      .catch((error) => console.log(error));
}