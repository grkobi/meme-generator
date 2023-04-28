'use strict'


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

function loadNamesListFromStorage(){
    const names = Object.keys(localStorage)
    return names
}