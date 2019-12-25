const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = "coords";
function saveCoords(coordObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordObj));
}

function handleGeoSucces(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordObj = {
    latitude,
    longitude
  };
  saveCoords(coordObj);
}

function handleGeoError() {
  console.log("cant access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null) {
    askForCoords();
  } else {
    //
  }
}

function init() {
  loadCoords();
}

init();
