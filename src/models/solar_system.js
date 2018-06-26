const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("MenuView:select", (event) => {
    console.log(event.detail);
  });
};

module.exports = SolarSystem;
