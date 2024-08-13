const fs = require('fs');
const assemble = require('../src/assemble');

const mdCSS = `
.md a {text-decoration:none; word-wrap: break-word; word-break: break-all;}
.md li {margin-left: 16px; list-style-type: disc;}
`

const read_board = (req, res) =>{
    url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const board_id = req.params.board_id;
    const checkdir = fs.existsSync(`./data/${board_id}`)
    if(!checkdir){
        res.redirect(`/?boardID=${board_id}`);
    } else {
        res.send(assemble(require(`../view/board.js`)(board_id, url),null,mdCSS));
    }

}

module.exports = read_board;