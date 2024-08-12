module.exports = (filename) => {
    return require(`../view/${filename}`)()
}