'use strict'

function onInit(){
    renderGallery()
}

function renderGallery() {
 let imgsGallery = getImgs() 
 let strHtml = imgsGallery.map(img => 
    `<img class="grid-item" onclick="onImgSelect(${img.id})" src="${img.url}"/>`)

    const elGalleryContainer = document.querySelector('.gallery-container')
    elGalleryContainer.innerHTML = strHtml.join('')
}

function onImgSelect(imgId) {
    setImgId(imgId)
    renderMeme()
    document.querySelector('.editor-container').classList.remove('hidden')
    document.querySelector('.gallery-container').classList.add('hidden')
}

function setImgId(){


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

