const html = require('./html');

module.exports = (content) => {
    return html('header') + content + html('../view/footer');
}