// const uri = /^(?<scheme>[a-z][a-z0-9+.-]+):(?<authority>\/\/(?<user>[^@]+@)?(?<host>[a-z0-9.\-_~]+)(?<port>:\d+)?)?(?<path>(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])+(?:\/(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])*)*|(?:\/(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])+)*)?(?<query>\?(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@]|[/?])+)?(?<fragment>\#(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@]|[/?])+)?$/i
const md = require('marked');

module.exports = item => {
    return `<li class="px-4 py-2 b-gray-200 b-1 b-solid rounded-md mb-2 flex flex-justify-between">
        ${md.parse(item.content)}
        <a class="text-gray-300 text-sm decoration-none" href="./delete_item/${item.board_id}/${item.id}">${new Date(item.id * 1).toLocaleString()}</a>
        </li>`
}