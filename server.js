const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

const html = (filename) => {
    return require(`./view/${filename}`)()
}

const assemble = (content) => {
    return html('header') + html(content) + html('footer');
}

// static file serving
app.use(express.static(__dirname + '/public'));

// request body를 사용하려면 필요하다고 한다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`${PORT} 포트에서 서버 실행 중...`);
})

app.get('/', (req, res) =>{
    res.send(assemble('index'));
})

app.post('/write_item', require('./src/write_item'));

app.get('/delete_item/:id', require('./src/delete_item'));