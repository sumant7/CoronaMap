//A Promise is a proxy for a value not necessarily known when the promise is created.
function updateMap() {
    console.log("Updating")
    fetch("/data.json")    //simply gets data and returns a js promise
        .then(response => response.json())
        //rsp is an object and rsp.data is an array
        .then((rsp) => {
            //console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;
                x = ((cases) / 5 + 20) * 2;

                new mapboxgl.Marker({
                    draggable: false,
                    color: `rgb(${x},0,0)`
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);
            });
        })

}

interval = 2000;
setInterval(updateMap, interval);
updateMap();