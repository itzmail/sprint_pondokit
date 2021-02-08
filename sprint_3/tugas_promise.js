const getData = () => {
    fetch('https://api.kawalcorona.com/')
    .then(res => res.json() )
    .then(res => console.log(res) )
    .catch(err => console.log(err))
}

getData()
