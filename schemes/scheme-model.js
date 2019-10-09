const db = require("../data/db");
module.exports = { get, getById };
function get() {
  return db("schemes");
}
function getById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
