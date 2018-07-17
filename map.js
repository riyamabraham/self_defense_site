
var locationsubmitted = document.getElementById("locationform");

locationsubmitted.addEventListener("submit", geocode);



function geocode(e) {
    e.preventDefault();
    var location = $("#loc-input").val();
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?', {
        params: {
            address: location,
            key: 'AIzaSyASns-JtV-F4gojMgunJamsjSKAhPesS38'
        }
    }).then(function (response) {

        //log full response

        console.log(response);

        //formatted address
        var formattedaddress = `<ul class = "list-group">
<li class="list-group-item">${response.data.results[0].formatted_address}</li>
</ul>`;



        ///address components

        var addresscomponents = response.data.results[0].address_components;


        var addresscomponentsoutput = '<ul class= "list-group">';
        for (var i = 0; i < addresscomponents.length; i++) {
            addresscomponentsoutput +=
                `
    <li class="list-group-item"><strong>${addresscomponents[i].types[0]}
        </strong>:${addresscomponents[i].long_name}</li>
        `;

        }

        addresscomponentsoutput += '</ul>';



        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;

        var geometryoutput =
            `<ul class= "list-group">
            <li class="list-group-item" > <strong>Latitude</strong>:
        ${ lat }</li >
            <li class="list-group-item"><strong>Longitude</strong>:
        ${lng}</li>
        </ul>`;

    

//output to app

$("#formatted-address").html(formattedaddress);
    $("#address-components").html(addresscomponentsoutput);
    $("#latlng").html(geometryoutput);
})
.catch (function(err) {
    console.log(err);
});
}