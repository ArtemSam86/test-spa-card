/* Для запуска севера необходимо в новом терминале запустить - node ./src/plugins/testServer.js */
const http = require('http')

const PORT = 3008;

const cardObject = [
    { id: 1, img: "", comparedValues: 41054 },
    { id: 2, img: "", comparedValues: 61051 },
    { id: 3, img: "", comparedValues: 21052 },
    { id: 4, img: "", comparedValues: 71055 },
    { id: 5, img: "", comparedValues: 81059 },
    { id: 6, img: "", comparedValues: 91050 },
    { id: 7, img: "", comparedValues: 41054 },
    { id: 8, img: "", comparedValues: 61051 },
    { id: 9, img: "", comparedValues: 21052 },
    { id: 10, img: "", comparedValues: 71055 },
    { id: 11, img: "", comparedValues: 81059 },
    { id: 12, img: "", comparedValues: 91050 },
    { id: 13, img: "", comparedValues: 41054 },
    { id: 14, img: "", comparedValues: 61051 },
    { id: 15, img: "", comparedValues: 21052 },
    { id: 16, img: "", comparedValues: 71055 },
    { id: 17, img: "", comparedValues: 81059 },
    { id: 18, img: "", comparedValues: 91050 },
    { id: 19, img: "", comparedValues: 41054 },
    { id: 20, img: "", comparedValues: 61051 },
    { id: 21, img: "", comparedValues: 21052 },
    { id: 22, img: "", comparedValues: 71055 },
    { id: 23, img: "", comparedValues: 81059 },
    { id: 24, img: "", comparedValues: 91050 },
    { id: 25, img: "", comparedValues: 41054 },
    { id: 26, img: "", comparedValues: 61051 },
    { id: 27, img: "", comparedValues: 21052 },
    { id: 28, img: "", comparedValues: 71055 },
    { id: 29, img: "", comparedValues: 81059 },
    { id: 30, img: "", comparedValues: 91050 },
    { id: 31, img: "", comparedValues: 41054 },
    { id: 32, img: "", comparedValues: 61051 },
    { id: 33, img: "", comparedValues: 21052 },
    { id: 34, img: "", comparedValues: 71055 },
    { id: 35, img: "", comparedValues: 81059 },
    { id: 36, img: "", comparedValues: 91050 },
]

const server = http.createServer((req, res) => {
    console.log('Server request');
    console.log(req.url, req.method);

    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type')
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081')
    res.setHeader('Content-Type', 'application/json')

    const data = JSON.stringify(cardObject);
    // res.write('Hello world!');
    res.end(data);
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
})