const fs = require('fs');

const list = (path) => {
    const readdir = fs.readdirSync(path);
    const board_id = path.split('/').pop();
    const items = readdir.filter(file => file.endsWith('.json'));
    const items_json = items.map((item) => {const naiyou = JSON.parse(fs.readFileSync(`${path}/${item}`, 'utf8')); naiyou.id = item.replace('.json', ''); naiyou.board_id = board_id; return naiyou;});
    return items_json;
}

module.exports = list;