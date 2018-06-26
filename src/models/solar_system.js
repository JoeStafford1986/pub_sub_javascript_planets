const PubSub = require('../helpers/pub_sub.js');

const SolarSystem = function(planets) {
  this.planets = planets;
};

SolarSystem.prototype.bindEvents = function () {
  PubSub.subscribe("MenuView:select", (event) => {
    const planetName = event.detail;
    const planetToReturn = this.returnPlanetObject(planetName);

    PubSub.publish("SolarSystem:send-planet", planetToReturn);
  });

};

SolarSystem.prototype.returnPlanetObject = function (planetName) {
  for (const planet of this.planets) {
      if (planet.name === planetName) {
        return planet;
      }
  }
};

module.exports = SolarSystem;
