"use strict";
Object.defineProperties(exports, {
  createPublisher: {get: function() {
      return createPublisher;
    }},
  __esModule: {value: true}
});
function createPublisher(server) {
  return new ConfluencePublisher(server);
}
var Bingo = function Bingo() {};
($traceurRuntime.createClass)(Bingo, {}, {});
var ConfluencePublisher = function ConfluencePublisher(server) {
  this.server = server;
};
($traceurRuntime.createClass)(ConfluencePublisher, {debug: function() {
    console.log("Publishing to server:", this.server);
  }}, {});
