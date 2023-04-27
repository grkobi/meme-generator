'use strict'

let gImgs
let gKeywordSearchCountMap = { 'funny': 11, 'cat': 9, 'baby': 5 }
const gFilterBy = {}

 gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['trump'] },
    { id: 2, url: 'img/2.jpg', keywords: ['dogs', 'cute'] },
    { id: 3, url: 'img/3.jpg', keywords: ['baby', 'dog', 'sleep'] },
    { id: 4, url: 'img/4.jpg', keywords: ['cat', 'sleep', 'laptop'] },
    { id: 5, url: 'img/5.jpg', keywords: ['baby', 'success', 'win'] },
    { id: 6, url: 'img/6.jpg', keywords: ['funny', 'meme', 'aliens'] },
    { id: 7, url: 'img/7.jpg', keywords: ['baby', 'surprise'] },
    { id: 8, url: 'img/8.jpg', keywords: ['funny', 'clown'] },
    { id: 9, url: 'img/9.jpg', keywords: ['baby', 'evil', 'laugh'] },
    { id: 10, url: 'img/10.jpg', keywords: ['obama', 'laugh', 'politics'] },
    { id: 11, url: 'img/11.jpg', keywords: ['fight', 'basketball'] },
    { id: 12, url: 'img/12.jpg', keywords: ['spooky','israeli tv'] },
    { id: 13, url: 'img/13.jpg', keywords: ['leonardo', 'toast', 'dicaprio'] },
    { id: 14, url: 'img/14.jpg', keywords: ['matrix', 'action','movie'] },
    { id: 15, url: 'img/15.jpg', keywords: ['boromir', 'funny', 'gondor'] },
    { id: 16, url: 'img/16.jpg', keywords: ['star trek', 'funny'] },
    { id: 17, url: 'img/17.jpg', keywords: ['putin', 'russia', 'politics'] },
    { id: 18, url: 'img/18.jpg', keywords: ['toy story', 'funny'] },
]


// let imagesKeywords = [
//     ['trump','funny','face','teeth'],
//     ['dog'],
//     ['dog', 'baby', 'friendly', 'cute', 'happy'],
//     ['cat', 'computer'],
//     ['success', 'baby', 'win'],
//     ['funny', 'history','aliens'],
//     ['baby', 'cute','shocked'],
//     ['funny'],
//     ['obama', 'laugh', 'politics'],
//     ['fight', 'basketball'],
//     ['spooky','israeli tv'],
//     ['leonardo', 'toast', 'dicaprio'],
//     ['matrix', 'action','movie'],
//     ['boromir', 'funny', 'gondor'],
//     ['star trek', 'funny'],
//     ['putin', 'russia', 'politics'],
//     ['toy story', 'funny'],
//   ]


// createImgsGallery()
// let keywords = getKeywords()

function getImgs() {
    const imgs = gImgs
    if (!gFilterBy.search) return imgs
    // let filteredImgs = gImgs.filter((img) => img.keywords.find(kw => kw.includes(gFilterBy.search)))
    // return filteredImgs
}

function getImg(id) {
    return gImgs.find(img => img.id === id)
  }


function setFilterBy(keyword) {
    gFilterBy = keyword
}
