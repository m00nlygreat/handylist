module.exports = (content, title, css) => {
    return require('../view/header')(title, css) + content + require('../view/footer')();
}