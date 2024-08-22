const qr = require('yaqrcode');
const list = require('../view/item_list');

module.exports = (board_id, url) => {
    return `
    <h1 class="m-2 text-5vw md:text-4xl">${url}</h1>
    <div class="w-full flex flex-col md:flex-row justify-center items-center md:items-start">
        <div class="flex flex-col w-45vw max-w-sm p-4"><img src="${qr(url)}" class="w-full m-4 p-4 md:p-8 md:m-0 b-gray-400 b-1 b-solid rounded-3xl"/></div>
        <div class="flex flex-col w-full max-w-3xl h-full">
        ${require('../view/new_item')(board_id)}
        ${list(require('../src/read_list')(`./data/${board_id}`).reverse())}
        </div>
        <script>
            document.getElementById('content').focus();
        </script>
    </div>
    `
}