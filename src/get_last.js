const list = require('./read_list');

module.exports = (req, res) => {
    const board = req.params.board_id;
    res.send(list(`./data/${board}`).pop());
}