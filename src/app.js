const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);
});
