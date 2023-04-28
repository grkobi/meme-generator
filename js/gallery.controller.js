'use strict'

const NUMBER_OF_IMAGES = 18
const NUMBER_OF_LINES = 15

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
    _hideGallery()
    const image = getImg(id)
    setImg(image.url)
    renderMeme()
}


function onMoveGalleryPage() {
    const elAboutContainer = document.querySelector('.about-container')
    const elGallery = document.querySelector('.gallery-container')
    const elMemeContainer = document.querySelector('.editor-container')
    // const elSavedMemesContainer = document.querySelector('.saved-memes-container')
    elAboutContainer.classList.add = hidden
    elMemeContainer.classList.add('hidden')

    renderGallery()

}

function onSetFilterBy(keyword) {
    document.querySelector('.search-meme').value = keyword
    keyword = keyword.toLowerCase()
    setFilterBy(keyword)
    renderGallery()
}


function _hideGallery() {
    const elEditorContainer = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    const elSearchMeme = document.querySelector('.search-meme')
    const elSavedMemesContainer = document.querySelector('.saved-memes-container')

    elEditorContainer.style.display = 'flex'
    elGallery.style.display = 'none'
    elSearchMeme.style.display = 'none'
    elSavedMemesContainer.style.display = 'none'
}

function onRenderSavedMeme() {
    const elEditorContainer = document.querySelector('.editor-container')
    elEditorContainer.style.display = 'none'
    const elGallery = document.querySelector('.gallery-container')
    elGallery.style.display = 'none'
    const memeNames = loadNamesListFromStorage()
    let elSavedMemesContainer = document.querySelector('.saved-memes-container')
    let strHtml = memeNames.forEach(name => {
        elSavedMemesContainer.innerHTML +=  `<button>${name}</button>`
    });
}