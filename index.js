function updateMap() {
    console.log("Updating map with realtime data")
    fetch("https://www.trackcorona.live/api/provinces")
        .then(response => response.json())
        .then(rsp => {
            // rsp ata wal part
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.confirmed;
                if (cases>50500){
                    color = "rgb(255, 0, 0)";
                }

                else{
                    color = `rgb(${cases}, 0, 0)`;
                }

                // map me marking krna 
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}

let interval = 20000;
setInterval( updateMap, interval); 