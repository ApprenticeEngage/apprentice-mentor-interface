export default function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const response = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      callback(response);
    });
  } else {
    console.log("Permission not granted");
  }
}
