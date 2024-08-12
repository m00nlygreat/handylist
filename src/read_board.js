const fs = require('fs');
const assemble = require('../src/assemble');

const read_board = (req, res) =>{
    const board_id = req.params.board_id;
    const checkdir = fs.existsSync(`./data/${board_id}`)
    if(!checkdir){
        res.redirect(`/?boardID=${board_id}`);
    } else {
        res.send(assemble(require(`../view/board.js`)(board_id)));
    }

}

module.exports = read_board;