const getData = () => {
    fetch('https://api.kawalcorona.com/')
    .then(res => res.json() )
    .then(res => console.log(res) )
    .catch(err => console.log(err))
}

getData()

const promise = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(respon => respon.json())
        .catch(json => console.log(json))
    }