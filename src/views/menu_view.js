const PubSub = require('../helpers/pub_sub.js');

const MenuView = function (menuElement) {
  this.menuElement = menuElement;
};

MenuView.prototype.bindEvents = function () {
  this.menuElement.addEventListener('click', (event) => {
    const selectedId = event.target.id;
    PubSub.publish("MenuView:select", selectedId);
  })
};

module.exports = MenuView;
