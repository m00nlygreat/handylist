const item = require('../view/item');

module.exports = (items) => {
    const list = (items.map(each => item(each))).join('');
    return `<ul class="p-2 flex flex-col">${list}<ul>`
}