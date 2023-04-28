'use strict'

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
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

function getMeme() {
    return gMeme
}

function setImg(image) {
    gMeme.selectedImgId = image
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


function setImgId(imgId) {
    gMeme.selectedImgId = imgId
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

function savedMemeSelect() {
    const memeName = prompt('Enter meme name')
    saveToStorage(memeName, gMeme)
    alert('Your meme has been saved!')
}