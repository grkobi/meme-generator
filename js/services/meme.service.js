'use strict'

let gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            fontName: 'Impact',
            posX: 50,
            posY: 50
        }
    ]
}

function getMeme() {
    return gMeme
}

function setLineText(line) {
    gMeme.lines[gMeme.selectedLineIdx].txt = line
}

function moveUp() {
    gMeme.lines[gMeme.selectedLineIdx].posY -= 1
}

function moveDown() {
    gMeme.lines[gMeme.selectedLineIdx].posY += 1
}

function addLine() {
    const newLine = {
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red',
        fontName: 'Impact',
        posX: 50,
        posY: 75
    }
    if (gMeme.lines.length === 0) newLine.posY = 50
    if (gMeme.lines.length === 1) newLine.posY = 100
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
