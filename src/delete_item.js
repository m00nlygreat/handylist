const fs = require('fs');
module.exports = (req, res) => {
    console.log(req.params.id);
    fs.unlinkSync(`./data/${req.params.id}.json`);
    res.redirect('/');
}