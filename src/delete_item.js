const fs = require('fs');
module.exports = (req, res) => {
    id = req.params.id;
    board_id = req.params.board_id;
    fs.unlinkSync(`./data/${board_id}/${id}.json`);
    res.redirect(`/${board_id}`);
}