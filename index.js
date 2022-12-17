const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');



fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);
});


fetchCoordsByIP('172.218.10.225', (error, coordinates) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }
  console.log("Coordinates: ", coordinates);
});

fetchISSFlyOverTimes({ latitude: '49.1665898', longitude: '-123.133569' }, (error, rises) => {
  if (error) {
    console.log("Error: ", error);
    return;
  }
  console.log("Rise times: ", rises);
});