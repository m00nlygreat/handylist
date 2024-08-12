module.exports = (board_id) => {
    return `
    <form name="new_item" method="POST" action="/write_item/${board_id}" class="p-2 w-full flex row">
        <input id="content" type="text" name="content" placeholder="내용을 입력하세요" class="
        w-full text-lg rounded-md p-2 b-1 b-solid b-gray
        ">
        <button type="submit" class="
        border-none bg-blue-600 ml-2 rounded-md text-white p-2
        ">ADD</button>
        <input type="file" name="file" hidden="true"/>
    </form>
    `
}