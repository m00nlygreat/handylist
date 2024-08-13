// const uri = /^(?<scheme>[a-z][a-z0-9+.-]+):(?<authority>\/\/(?<user>[^@]+@)?(?<host>[a-z0-9.\-_~]+)(?<port>:\d+)?)?(?<path>(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])+(?:\/(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])*)*|(?:\/(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@])+)*)?(?<query>\?(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@]|[/?])+)?(?<fragment>\#(?:[a-z0-9-._~]|%[a-f0-9]|[!$&'()*+,;=:@]|[/?])+)?$/i
const md = require('marked');

module.exports = item => {
    return `<li class="pl-4 pr-2 py-2 b-gray-200 b-1 b-solid rounded-md mb-2 items-center flex space-x-4 w-full">
        <div class="w-full md">
        ${md.parse(item.content)}
        </div>
        <a class="decoration-none" href="./delete_item/${item.board_id}/${item.id}"><div class="w-8 text-gray-300 aspect-square flex justify-center items-center text-center text-lg">×</div></a>
        </li>`
}

//${new Date(item.id * 1).toLocaleString()}