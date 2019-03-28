function query (selector) {
    return document.querySelector(selector)
}

function queryAll (selector) {
    return document.querySelectorAll(selector)

}

fetch(`https://itunes-api-proxy.glitch.me/search?term=${input}`)
    .then(function (response){
        console.log(response)
        return response.json()
    })
    .then(function (json) {
        console.log(json)
    })


