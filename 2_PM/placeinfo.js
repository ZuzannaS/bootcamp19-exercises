/* TODO: Write a program which takes in a place name via the command line and 
/ returns the following string, formatted with the appropriate values:

'INPUTTED_PLACE is located at coordinates RETURNED_COORDINATES, at the address RETURNED_ADDRESS.' */
const googleMapsClient = require('./google_api.js')
const loc = {
    input: process.argv[2],
    inputtype: 'textquery',
}
let id = ''
let loc2 = {}
googleMapsClient.findPlace(loc)
.asPromise()
.then((response) => {
    id = response.json.candidates[0].place_id
    loc2.placeid = id
    googleMapsClient.place(loc2)
    .asPromise()
    .then((response) => {
    console.log(`${loc.input} is located at coordinates lat: ${response.json.result.geometry.location.lat} and lng: ${response.json.result.geometry.location.lng}, at the address ${response.json.result.formatted_address}.`)
    })
    .catch((err) => {
    console.log(err);
    })
}) 

.catch((err) => {
  console.log(err);
});

