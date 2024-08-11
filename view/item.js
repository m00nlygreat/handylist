module.exports = item => {
    return `<li class="px-4 py-2 b-gray-200 b-1 b-solid rounded-md mb-2 flex flex-justify-between">
        <span>${item.content}</span>
        <a class="text-gray-300 text-sm decoration-none" href="./delete_item/${item.id}">${new Date(item.id * 1).toLocaleString()}</a>
        </li>`
}