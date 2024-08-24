const md = require('marked');
const fs = require('fs');
const md_to_html = (path) => {
    file = fs.readFileSync(path);
    return `<div class="md">${md.parse(file.toString())}</div>`
}

module.exports = md_to_html;