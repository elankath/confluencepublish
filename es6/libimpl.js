"use strict";

export function createPublisher(server) {
  return new ConfluencePublisher(server);
}

class Bingo {

}
class ConfluencePublisher{
  constructor(server) {
    this.server = server
  }

  debug() {
    console.log("Publishing to server:", this.server);
  }
}



