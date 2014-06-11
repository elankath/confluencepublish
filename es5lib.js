System.register((void 0), [], function() {
  "use strict";
  "use strict";
  function createVehicle() {
    return new Vehicle("bmw", "2014");
  }
  var Vehicle = function Vehicle(name, year) {
    this.name = name;
    this.year = year;
  };
  ($traceurRuntime.createClass)(Vehicle, {summary: function() {
      return "This vehicle's name is " + this.name + " and it was manufactured in " + this.year;
    }}, {});
  module.exports = createVehicle;
  return {};
});
