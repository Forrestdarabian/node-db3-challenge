const db = require("../data/db");
module.exports = { find, findById, findSteps, add, update };
function find() {
  return db("schemes");
}
function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}
function findSteps(id) {
  return db("steps")
    .where({ id })
    .first();
}
function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(([id]) => {
      return findById(id);
    });
}
function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id })
    .then(updated => (updated ? getById(id) : null));
}
