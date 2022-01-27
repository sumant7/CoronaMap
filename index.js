//A Promise is a proxy for a value not necessarily known when the promise is created.
function updateMap()
{
    fetch("/data.json")    //simply gets data and returns a js promise
    .then(response => response.json())
    .then((rsp) =>{    //rsp is an object and rsp.data is an array
        console.log(rsp.data)
        rsp.data.forEach(element => {
            lattitude= element.lattitude
            longitude= element.longitude
        });
    })
  }
updateMap();