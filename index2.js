const { printISSFlyoverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then(times => {
    printISSFlyoverTimes(times);
  })
  .catch((error) => {
    console.log("Error: ", error.message);
  });

// printISSFlyoverTimes([
//   { risetime: 1671308292, duration: 604 },
//   { risetime: 1671344692, duration: 115 },
//   { risetime: 1671381092, duration: 448 },
//   { risetime: 1671417492, duration: 118 },
//   { risetime: 1671453892, duration: 152 }
// ]);
