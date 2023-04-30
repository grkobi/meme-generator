'use strict'

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    selectedImgUrl: '',
    lines: [
        {
            txt: 'Enter your text here',
            size: 30,
            align: 'left',
            fillColor: '#FFA500',
            strokeColor: 'black',
            fontName: 'Impact',
            posX: 50,
            posY: 30
        }
    ]
}

const STORAGE_KEY = 'memeDB'

let gSavedMeme = loadFromStorage(STORAGE_KEY)

function getMeme() {
    return gMeme
}

function setImg(img) {
    gMeme.selectedImgUrl = img
}

function setLineText(line, lineIdx) {
    gMeme.lines[lineIdx === undefined ? gMeme.selectedLineIdx : lineIdx].txt = line
}

function setLineSize(size, lineIdx) {
    gMeme.lines[lineIdx === undefined ? gMeme.selectedLineIdx : lineIdx].size = size
}

function moveUp() {
    gMeme.lines[gMeme.selectedLineIdx].posY -= 1
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx].posY += 1
}

function addLine() {
    const newLine = {
        txt: 'Enter your text here',
        size: 30,
        align: 'left',
        fillColor: '#FFA500',
        strokeColor: 'black',
        fontName: 'Impact',
        posX: 50,
        posY: 150
    }
    if (gMeme.lines.length === 0) newLine.posY = 50
    if (gMeme.lines.length === 1) newLine.posY = 350
    gMeme.lines.push(newLine)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}


function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = Math.max(gMeme.selectedLineIdx - 1, 0)
}

function switchLines() {
    gMeme.selectedLineIdx = (gMeme.selectedLineIdx + 1) % gMeme.lines.length
}

function resetNumberOfLines() {
    const newLine = {
        txt: 'Enter your text here',
        size: 30,
        align: 'left',
        fillColor: '#FFA500',
        strokeColor: 'black',
        fontName: 'Impact',
        posX: 50,
        posY: 40
    }
    gMeme.selectedLineIdx = 0
    gMeme.lines = [newLine]
}

function saveMeme(imgURL) {
    gMeme.url = imgURL
    const savedMeme = gMeme
    savedMeme.id = makeId()
    if (!gSavedMeme) gSavedMeme = []
    gSavedMeme.push(savedMeme)
    saveMemeToStorage()
}

function saveMemeToStorage() {
    saveToStorage(STORAGE_KEY, gSavedMeme)
}

function getSavedMeme() {
    return gSavedMeme
}

function getMemeFromSaved(id) {
    const meme = gSavedMeme.find(savedMeme => savedMeme.id === id)
    gMeme = meme
}

function increaseTxtSize() {
    gMeme.lines[gMeme.selectedLineIdx].size += 2
}

function decreaseTxtSize() {
    gMeme.lines[gMeme.selectedLineIdx].size -= 2
}