const fs = require('fs');
const save = (board_id, data) => {
    fs.writeFileSync(`./data/${board_id}/${Date.now()}.json`, data, err => console.log(err));
}

const write = (req, res) => {
    const board_id = req.params.board_id;
    save(board_id,JSON.stringify(req.body));
    res.redirect(`/${board_id}`); 
}

module.exports = write;