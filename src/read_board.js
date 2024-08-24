const fs = require('fs');
const assemble = require('../src/assemble');

const mdCSS = require('../style/md_css.js')();

const read_board = (req, res) =>{
    url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const board_id = req.params.board_id;
    const checkdir = fs.existsSync(`./data/${board_id}`)
    if(!checkdir){
        res.redirect(`/?boardID=${board_id}`);
    } else {
        res.send(assemble(require(`../view/board.js`)(board_id, url),mdCSS, null));
    }

}

module.exports = read_board;