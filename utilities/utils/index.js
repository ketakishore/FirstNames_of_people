const list = require("/home/workspace/coding-practices/coding-practice-2c/country/state/city/index");
const getFirstNames = (list) => {
  return list.map((eachPerson) => eachPerson.firstName);
};

module.exports = getFirstNames(list);
