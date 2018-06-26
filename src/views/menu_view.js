const PubSub = require('../helpers/pub_sub.js');

const MenuView = function (menuElement) {
  this.menuElement = menuElement;
};

MenuView.prototype.bindEvents = function () {
  this.menuElement.addEventListener('click', (event) => {
    console.log(event.target);
  })
};

module.exports = MenuView;
