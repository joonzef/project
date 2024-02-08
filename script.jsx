    let status;
    const succes = (position) => {
        console.log(position);
    };
    
    const error = () => {
        status.textcontent = 'Unable to retrieve your location';
    }

    navigator.geolocation.watchPosition(succes, error); 