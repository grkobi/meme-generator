'use strict'

const memeLines = [
    'Lets go home', 
    'What are you saying?', 
    'Shocking',
    'Hilarious!',
    'Beats me',
    'I am loving this',
    'This is bullshit',
    'I think you are wrong',
    'Never saw anything like this',
    'Hilarious!',
    'LOL',
    'Are you sitting?',
    'Hold tight',
    'Have mercy',
    'You keep using that word'
]

function renderMeme() {
    const meme = getMeme()
    const elCanvas = document.querySelector('canvas')
    const gCtx = elCanvas.getContext('2d')
    const elImg = new Image()
    elImg.src = `${meme.selectedImgId}`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, elCanvas.width, elCanvas.height)
        meme.lines.forEach((line, index) => {
            gCtx.fillStyle = line.fillColor
            gCtx.strokeStyle = line.strokeColor
            gCtx.font = `${line.size}px ${line.fontName}`
            gCtx.textAlign = line.align
            gCtx.fillText(line.txt, line.posX, line.posY)
            if (index === meme.selectedLineIdx) {
                gCtx.lineWidth = 1
                let textSizes = gCtx.measureText(line.txt)
                const actualHeight = textSizes.actualBoundingBoxAscent + textSizes.actualBoundingBoxDescent
                gCtx.strokeStyle = "orange"
                gCtx.strokeRect(line.posX, line.posY - 30, textSizes.width + 20, actualHeight + 20)
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
    clearSearchBar()
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

function clearSearchBar() {
    const elSearchBar = document.querySelector('.input-text')
    elSearchBar.value = ''
}


function onSavedMemeSelect() {
    savedMemeSelect()
}

function onRandomMeme() {
    const imageId = getRandomIntInclusive(1, NUMBER_OF_IMAGES)
    const numberLines = getRandomIntInclusive(1, 2)
    resetNumberOfLines()
    if (numberLines === 2) addLine()
    for (let i = 0; i < numberLines; i++) {
        const randomSentence = memeLines[getRandomIntInclusive(0, memeLines.length - 1)]
        setLineText(randomSentence, i)
        const randomLineSize = getRandomIntInclusive(20, 40)
        setLineSize(randomLineSize, i)
    }
    onImgSelect(imageId)
}