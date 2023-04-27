'use strict'

function onInit() {
    renderGallery()
}

function renderGallery() {
    let imgsGallery = getImgs()
    let strHtml = imgsGallery.map(img =>
        `<img class="grid-item" onclick="onImgSelect(${img.id})" src="${img.url}"/>`)

    const elGalleryContainer = document.querySelector('.gallery-container')
    elGalleryContainer.innerHTML = strHtml.join('')

}

function onImgSelect(id) {
    // reInitMeme()
    // chooseImg(id)
    const elEditorContainer = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    const elSavedMemesContainer = document.querySelector('.saved-memes-container')

    const image = getImg(id)
    setImg(image)
    renderMeme()

    elEditorContainer.style.display = 'flex'
    elGallery.style.display = 'none'
    elSavedMemesContainer.style.display = 'none'

}


function onMoveGalleryPage() {
    const elAboutContainer = document.querySelector('.about-container')
    const elGallery = document.querySelector('.gallery')
    const elMemesContainer = document.querySelector('.editor-container')
    const elSavedMemesContainer = document.querySelector('.saved-memes-container')

    elAboutContainer.style.display = 'none'
    elGallery.style.display = 'none'
    elMemesContainer.style.display = 'none'
    elSavedMemesContainer.style.display = 'none'

    renderGallery()

}

function onSavedMemeSelect(idx) {
    console.log('saved meme select')
}

// function chooseImg(id) {
//     const elEditorContainer = document.querySelector('.editor-container')
//     const elGallery = document.querySelector('.gallery-container')
//     const elSavedMemesContainer = document.querySelector('.saved-memes-container')

//     const image = getImg(id)
//     setImg(image)
//     renderMeme(getMeme())

//     elEditorContainer.style.display = 'flex'
//     elGallery.style.display = 'none'
//     elSavedMemesContainer.style.display = 'none'
// }

function onSetFilterBy(keyword) {
    setFilterBy(keyword)
    renderGallery()
}