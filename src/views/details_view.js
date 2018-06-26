const PubSub = require('../helpers/pub_sub.js');

const DetailsView = function (detailsElement) {
  this.detailsElement = detailsElement;
};

DetailsView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:send-planet", (event) => {
    const planet = event.detail;
    this.render(planet);
    console.log(planet);
  });
};

DetailsView.prototype.render = function (planet) {
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = `The planet ${planet.name} has an orbit of ${planet.orbit}. It's day length is ${planet.day}. It's surface area is ${planet.surfaceArea}. It's volume is ${planet.volume}. It's gravity is ${planet.gravity}. It has ${planet.moons} moons.`

  this.detailsElement.appendChild(infoParagraph);
};

module.exports = DetailsView;
