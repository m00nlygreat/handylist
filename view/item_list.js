const item = require('../view/item');

module.exports = (items) => {
    const list = (items.reverse().map(each => item(each))).join('');
    return `<ul class="p-3">${list}<ul>`
}