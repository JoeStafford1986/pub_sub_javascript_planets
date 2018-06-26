const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const MenuView = require('./views/menu_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
  const planetsDataModel = new SolarSystem(planetsData);
  console.log(planetsDataModel.planets);

  const menuElement = document.querySelector('nav.planets-menu');
  const menuView = new MenuView(menuElement);
  menuView.bindEvents();
});
