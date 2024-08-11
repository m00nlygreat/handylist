module.exports = () => {
    return `
    ${require('./new_item')()}
    ${require('../src/read_list')('./data')}
    `
}