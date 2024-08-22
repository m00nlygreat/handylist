const qr = require('yaqrcode');
const list = require('../view/item_list');

module.exports = (board_id, url) => {
    return `
    <h1 class="m-2">${url}</h1>
    <div class="w-full flex flex-row justify-center">
        <div class="hidden md:flex flex-col w-lg p-4"><img src="${qr(url)}" class="w-full p-8 b-gray-400 b-1 b-solid rounded-3xl"/></div>
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