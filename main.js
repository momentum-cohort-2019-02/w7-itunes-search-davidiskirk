function query (selector) {
    return document.querySelector(selector)
}

function queryAll (selector) {
    return document.querySelectorAll(selector)

}

const searchDiv = query('#search-button')
const searchButton = document.createElement('div')
searchButton.innerText = 'Search Button'
searchButton.addEventListener('click', function () {
    createMusic(input)})



function getMusic(input){
    encodeURIComponent(input)
    let promise = fetch(`https://itunes-api-proxy.glitch.me/search?term=${input}`)
        .then(function (response){
            if (!response.ok){
                throw Error(response.statusText)
            }
            return response.json()
        })
        return promise
}

function createMusic (name) {
    getMusic (name)
    .then(function (searchResult){
        console.log(searchResult)
        const trackDiv = query('#track')
       
        const artist = name
        query('#artist').innerText = artist
       
        trackDiv.innerHTML = ''
        let idx
        for (idx = 38; idx < searchResult.results.length; idx++){
            const trackItem = document.createElement('div')
            const artworkTag = document.createElement('div')
            const audioDiv = query('#audioplayer')
            const audioBar = document.createElement ('div')
            const audio = searchResult.results[idx].previewUrl
            console.log(audio)
            const artworkUrl = searchResult.results[idx].artworkUrl100
            audioBar.innerHTML = `<audio
                            controls
                            src="${audio}">
                                Your browser does not support the
                                <code>audio</code> element.
                        </audio>`
            trackItem.innerText = searchResult.results[idx].trackName
            artworkTag.innerHTML = `<img src="${artworkUrl}">`
            trackDiv.appendChild(artworkTag)
            artworkTag.appendChild(trackItem)
            artworkTag.appendChild(audioBar)
            artworkTag.classList.add('artwork')
            trackItem.classList.add('track')
            audioBar.classList.add('audio-player')
        }
    })
}











document.addEventListener('DOMContentLoaded', function(){
    query('#name').addEventListener('change', function(event){
        console.log(event.target.value)
        createMusic(event.target.value)
    })
})



