'use strict'

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function myHamburger() {
  let elMenu = document.getElementById("myLinks");
  if (elMenu.style.display === "block") {
    elMenu.style.display = "none";
  } else {
    elMenu.style.display = "block";
  }
}

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function loadFromStorage(key) {
    const str = localStorage.getItem(key)
    return JSON.parse(str)
}

function saveToStorage(key, value) {
    const str = JSON.stringify(value)
    localStorage.setItem(key, str)
}

function loadNamesListFromStorage() {
    const names = Object.keys(localStorage)
    return names
}

function makeId(length = 6) {
    var id = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
    for (var i = 0; i < length; i++) {
      id += possible.charAt(getRandomInt(0, possible.length))
    }
  
    return id
  }