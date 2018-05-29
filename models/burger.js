var orm = require("../config/orm.js");

var seeBurgers = function(callback){
  orm.selectAll("burgers", callback);
}

var insertBurger = function(burgerName){
  orm.insertOne("burgers", burgerName, false);
}
var updateBurger = function(devoured, id) {
  orm.updateOne("burgers", "devoured", devoured, id);
}

module.exports = {
  burgers: seeBurgers,
  insertedBurger: insertBurger,
  updatedBurger: updateBurger
};