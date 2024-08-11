const fs = require('fs');
const items_list = require('../view/item_list');

const list = (path) => {
    const readdir = fs.readdirSync(path);
    const items = readdir.filter(file => file.endsWith('.json'));
    const items_json = items.map((item) => {const naiyou = JSON.parse(fs.readFileSync(`${path}/${item}`, 'utf8')); naiyou.id = item.replace('.json', ''); return naiyou;});
    return items_list(items_json);
}

module.exports = list;