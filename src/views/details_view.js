const PubSub = require('../helpers/pub_sub.js');

const DetailsView = function (detailsElement) {

};

DetailsView.prototype.bindEvents = function () {
  PubSub.subscribe("SolarSystem:send-planet", (event) => {
    const planet = event.detail;
    console.log(planet);
  });
};

module.exports = DetailsView;
