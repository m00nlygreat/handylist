module.exports = board_id => {
    const body = `
    <div class="flex flex-col w-full max-w-lg">
    ${require('../view/new_item')(board_id)}
    ${require('../src/read_list')(`./data/${board_id}`)}
    </div>
    `
    return body
}