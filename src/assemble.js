module.exports = (content, css, title) => {
    return require('../view/header')(css, title) + content + require('../view/footer')();
}