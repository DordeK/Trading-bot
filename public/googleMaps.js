
let options={
  center: { lat: 46.2401729, lng: 14.3449829 },
  zoom: 16,
}

function initMap() {
let map = new google.maps.Map(document.getElementById("map"), options);
  console.log(map);
}
