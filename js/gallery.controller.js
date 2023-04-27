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

    const elEditorContainer = document.querySelector('.editor-container')
    const elGallery = document.querySelector('.gallery-container')
    const elSearchMeme = document.querySelector('.search-meme')
    const elSavedMemesContainer = document.querySelector('.saved-memes-container')

    elEditorContainer.style.display = 'flex'
    elGallery.style.display = 'none'
    elSearchMeme.style.display = 'none'
    elSavedMemesContainer.style.display = 'none'

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
    //elGallery.style.display = 'none'
    elMemeContainer.classList.add('hidden')
    // elSavedMemesContainer.style.display = 'none'

    renderGallery()

}

function onSavedMemeSelect(idx) {
    console.log('saved meme select')
}


function onSetFilterBy(keyword) {
    console.log(keyword)
    setFilterBy(keyword)
    renderGallery()
}

