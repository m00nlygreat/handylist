const fs = require('fs');

module.exports = (req, res) => {
    const board_id = req.body.board_id;
    const checkdir = fs.existsSync(`./data/${board_id}`)
    if (!checkdir) {
        fs.mkdirSync(`./data/${board_id}`);
    }
    res.redirect(`/${board_id}`);
}
