'use strict';


let menuHandler = document.getElementById("menu");
menuHandler.onclick = (event) => {
  require.ensure([], function (require) {

var Menu = require('./menu');

var pandaMenu = new Menu.default({
  title: "Меню панды",
  items: [{
    text: 'Яйца',
    href: '#eggs'
  }, {
    text: 'Мясо',
    href: '#meat'
  }, {
    text: '99% еды - бамбук!',
    href: '#bamboo'
  }]
});

document.body.appendChild(pandaMenu.elem);
  
})
}

