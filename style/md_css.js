module.exports = () => {
    return `
    .md {
        * {margin: 0.5rem 0}
        a {text-decoration:none; word-wrap: break-word; word-break: break-all;}
        ul li {margin-left: 1.5rem; list-style-type: disc;}
        ol li {margin-left: 2rem; list-style-type: decimal;}
        iframe, img {width: 100%;}
    }
    `
}

