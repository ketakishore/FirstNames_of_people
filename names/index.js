const firstName_object = require("../utilities/utils/index");
function getPeopleInCity(firstName_object) {
  let newArray = [];
  for (let each_first_name of firstName_object) {
    newArray.push(each_first_name);
  }
  return newArray;
}
module.exports = getPeopleInCity(firstName_object);
