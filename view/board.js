const qr = require('yaqrcode');

module.exports = (board_id, url) => {
    return `
    <div class="hidden md:flex flex-col w-lg p-4"><img src="${qr(url)}" class="w-full p-8 b-gray-400 b-1 b-solid rounded-3xl"/></div>
    <div class="flex flex-col w-full max-w-lg h-full">
    ${require('../view/new_item')(board_id)}
    ${require('../src/read_list')(`./data/${board_id}`)}
    </div>
    <script>
        document.getElementById('content').focus();
    </script>
    `
}