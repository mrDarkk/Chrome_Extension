const api_key = 'BidPCeR8DsLeJqavYuHKjKFtSE9CCOtT' //api key generated from official giphy website       
const search = document.querySelector("#search"); //

search.addEventListener('keypress', (e) => { // adding event listener for upon hitting enter key
    if (e.key === 'Enter') {
        fetchImages(search.value)
    }
})

function fetchImages(value) {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${value}&limit=9&api_key=${api_key}`) //fetching the api w value and api key
        .then(res => res.json()) // promise for jSON data, and calling
        .then(jsonData => { //
            buildUI(jsonData) //using Data to build the UI
        })
}

function buildUI(response) {
    // document.write(JSON.stringify(response))
    let column = document.querySelector('.columns') //
    let len = response.data.length;
    column.innerHTML = ''; // to avoid appending the the previous search results
    for (let index = 0; index < len; index++) { //looping for more results
        let url = response.data[index].images.original.url; //obtaining the gif for 
        let img = document.createElement('img') //
        img.setAttribute('src', url); //
        column.appendChild(img) //appending to the body
    }

}

document.body.addEventListener('click', (e) => { //click on the body
    if (e.target.tagName === "IMG") //download from the src if tag is IMG
        chrome.downloads.download({ url: e.target.src }, () => {}) //download from the src if tag is IMG
})