'use strict'

const memeLines = [
    'Eureka!',
    'Aliens everywhere',
    'Shocking',
    'Hilarious!',
    'Beats me',
    'I\'m loving this!',
    'This is nonsense',
    'Never saw it coming',
    'Not sure if',
    'Hilarious!',
    'LOL!!',
    'Success!!',
    'I\'m so sleepy',
    'Have mercy!',
    'You keep using that word'
]

const gElCanvas = document.querySelector('canvas')

function renderMeme() {
    const meme = getMeme()
    // const gElCanvas = document.querySelector('canvas')
    const gCtx = gElCanvas.getContext('2d')
    const elImg = new Image()
    elImg.src = `${meme.selectedImgUrl}`
    console.log(meme)
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
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
                gCtx.strokeStyle = "black"
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


// function onSavedMemeSelect() {
//     savedMemeSelect()
// }

function onSaveMeme() {
    const memeURL = gElCanvas.toDataURL()
    saveMeme(memeURL)
    flashMsg(`Meme saved`)
    // alert('Your meme has been saved!')
}

function onRandomMeme() {
    const imageId = getRandomIntInclusive(1, NUMBER_OF_IMAGES)
    const numberLines = getRandomIntInclusive(1, 2)
    resetNumberOfLines()
    if (numberLines === 2) addLine()
    for (let i = 0; i < numberLines; i++) {
        const randomSentence = memeLines[getRandomIntInclusive(0, memeLines.length - 1)]
        setLineText(randomSentence, i)
        const randomLineSize = getRandomIntInclusive(17, 40)
        setLineSize(randomLineSize, i)
    }
    onImgSelect(imageId)
}

function onDownloadMeme(elLink) {
    elLink.href = gElCanvas.toDataURL()
}

function onShareMeme() {
    const memeData = gElCanvas.toDataURL('image/jpeg')
}

function _hideMemeEditor() {
    const elMemeEditor = document.querySelector('.editor-container')
    elMemeEditor.style.display = 'none'
}

function flashMsg(msg) {
    const el = document.querySelector('.user-msg')
    el.innerText = msg
    el.classList.add('open')
    setTimeout(() => {
        el.classList.remove('open')
    }, 3000)
}

function onShareMeme() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

function onIncreaseTxtSize() {
    increaseTxtSize()
    renderMeme()
}

function onDecreaseTxtSize(){
    decreaseTxtSize()
    renderMeme()
}