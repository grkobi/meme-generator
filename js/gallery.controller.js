'use strict'

const NUMBER_OF_IMAGES = 18
const NUMBER_OF_LINES = 15

function onInit() {
    renderGallery()
}

function renderGallery() {
    let imgsGallery = getImgs()
    let strHtml = imgsGallery.map(img =>
        `<img class="grid-item" onclick="onImgSelect(${img.id})" src="${img.url}" />`)

    const elGalleryContainer = document.querySelector('.gallery-container')
    elGalleryContainer.innerHTML = strHtml.join('')

}

function onImgSelect(id) {
    _hideGallery()
    const image = getImg(id)
    // console.log(image)
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
    const elKeywordsMap = document.querySelector('.keywords-map')

    elEditorContainer.style.display = 'flex'
    elGallery.style.display = 'none'
    elSearchMeme.style.display = 'none'
    elSavedMemesContainer.style.display = 'none'
    elKeywordsMap.style.display = 'none'
}

function onRenderSavedMemes() {
    _hideGallery()
    _hideFlexibleBtn()
    _hideMemeEditor()

    const imgs = getSavedMeme()
    // console.log(imgs)

    const strHtml = imgs.map(img => `
    <div class="saved-item">
    <img onclick="onMemeSelect('${img.id}')" src=${img.url}>
    </div>
    `)

    const elSavedMemesContainer = document.querySelector('.saved-memes-container')
    elSavedMemesContainer.innerHTML = strHtml.join('')
    elSavedMemesContainer.style.display = 'flex'

}

function onMemeSelect(id) {
    const elEditorContainer = document.querySelector('.editor-container')
    elEditorContainer.style.display = 'flex'
    getMemeFromSaved(id)
    renderMeme()
}
// const memeNames = loadNamesListFromStorage()
// let elSavedMemesContainer = document.querySelector('.saved-memes-container')
// // console.log(memeNames)
// let strHtml = memeNames.forEach(name => {
//     elSavedMemesContainer.innerHTML += `<button class="bla" onclick="onRenderSavedMeme(this)">${name}</button>`
// });


// function onRenderSavedMeme(elMeme) {
//     // const meme = loadFromStorage(memeName)
//     console.log(elMeme)
//     const kobi= document.querySelector(".bla").addEventListener("click", elMeme);
//     console.log(kobi)
// }


function onOpenAboutSection() {
    _hideGallery()
    _hideMemeEditor()
    _hideFlexibleBtn()
    const elAboutContainer = document.querySelector('.about-container')
    elAboutContainer.innerHTML = `<h2>About</h2><p>Create awesome looking memes with Meme Generator and share them with your friends</p>`
}

function _hideFlexibleBtn() {
    const elFlexibleBtn = document.querySelector('.random-meme-btn')
    elFlexibleBtn.style.display = 'none'
}