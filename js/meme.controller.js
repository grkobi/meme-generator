'use strict'


// renderMeme()

function renderMeme() {
    const meme = getMeme()
    const elCanvas = document.querySelector('canvas')
    const gCtx = elCanvas.getContext('2d')
    const elImg = new Image()
    elImg.src = `${meme.selectedImgId}`
    //elImg.txt = meme.txt
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elCanvas.width, elCanvas.height)
        meme.lines.forEach((line, index) => {
            gCtx.fillStyle = line.fillColor
            gCtx.strokeStyle = line.strokeColor
            gCtx.font = `${line.size}px ${line.fontName}`
            gCtx.textAlign = line.align
            gCtx.fillText(line.txt, line.posX, line.posY)
            if (index === meme.selectedLineIdx) {
                gCtx.lineWidth = 1;
                gCtx.strokeStyle = "#FF0000";
                gCtx.strokeRect(line.posX, line.posY -20, 100, 20);//for white background
            }
        })

    }


}

function onSetLineText(txt, ev) {
    setLineText(txt.value)
    renderMeme()
}

function onMoveUp() {
    moveUp()
    renderMeme()
}

function onMoveDown() {
    moveDown()
    renderMeme()
}

function onAddLine() {
    addLine()
    renderMeme()
}

function onDeleteLine() {
    deleteLine()
    renderMeme()
}

function onSwitchLines() {
    switchLines()
    renderMeme()
}




