function showPosition(pos) {
    var lt = 50.33514898909946
    var lg = 34.90596447104751
    document.getElementById("geo").innerHTML =
        "Okhtyrka, Ucrânia" + "<br>" + "Latitude: " + lt + " Longitude: " + lg
    var map = L.map('map').setView([lt, lg], 13);
    var marker = L.marker([lt, lg]).addTo(map);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFyc2gwOTAiLCJhIjoiY2wzMWhuZWh6MDl1ZTNnbGNoZjRsN290bCJ9.Y72b4pkvxSoskS8sFA5InA'
    }).addTo(map);
}
