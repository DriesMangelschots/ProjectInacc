// Regular map
function regular_map() {
    var locatie = {lat: 51.2198468, lng: -4.9107236};

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: locatie
        
    });

    var aanduiding = new google.maps.Marker({
        position: locatie,
        map: map,
        title: "Inacc"
    });
}

