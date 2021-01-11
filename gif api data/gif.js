async function fetchdata() {
    let img = document.getElementById('img1')
    const res = await fetch('http://api.giphy.com/v1/gifs/translate?api_key=BidPCeR8DsLeJqavYuHKjKFtSE9CCOtT&s=thor', { mode: 'cors' })
    const result = await res.json();
    img.src = result.data.images.original.url

}
fetchdata();
const img2 = document.getElementById('img2')
fetch('http://api.giphy.com/v1/gifs/translate?api_key=BidPCeR8DsLeJqavYuHKjKFtSE9CCOtT&s=thanos', { mode: 'cors' })
    .then((response) => {

        return response.json()
    })
    .then((response) => {
        img2.src = response.data.images.original.url
    })
    .catch(e => {
        console.log(e)
    })
const img3 = document.getElementById('img3')
fetch('http://api.giphy.com/v1/gifs/translate?api_key=BidPCeR8DsLeJqavYuHKjKFtSE9CCOtT&s=ironman', { mode: 'cors' })
    .then((response) => {
        s
        return response.json()
    })
    .then((response) => {
        img3.src = response.data.images.original.url
    })
    .catch(e => {
        console.log(e)
    })
const img4 = document.getElementById('img4')
fetch('http://api.giphy.com/v1/gifs/translate?api_key=BidPCeR8DsLeJqavYuHKjKFtSE9CCOtT&s=marvel', { mode: 'cors' })
    .then((response) => {

        return response.json()
    })
    .then((response) => {
        img4.src = response.data.images.original.url
    })
    .catch(e => {
        console.log(e)
    })