const fs = require('fs');
const save = (data) => {
    fs.writeFileSync(`./data/${Date.now()}.json`, data, err => console.log(err));
}

const write = (req, res) => {
    save(JSON.stringify(req.body));
    res.redirect('/'); 
}

module.exports = write;