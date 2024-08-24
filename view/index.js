module.exports = () => {
    return`<div class="w-full h-full p-8 bg-gray-100 flex flex-col justify-center items-center content-center">
    <div class="max-w-md flex flex-col justify-center content-center">
        <p>enter a board name to visit a board</p>
        <form action="/new_board" method="post">
        <input id="board_id" type="text" name="board_id" placeholder="board name" class="
        w-full shadow h-12 text-lg rounded-md p-2 b-1 b-solid b-gray my-3 focused:b-3
        "/>
        <button type="submit" hidden="true" class="p-2 w-full bg-blue-600 text-white rounded-md">Go</button>
        </form>
        <p>.. or make one if there isn't</p>

        <p class="self-center m-8">...</p>

        ${require('../src/md_to_html')('./docs/intro.md')}
    </div>
    </div>
    <script>
        var board_input = document.getElementById('board_id');
        var urlSearch = new URLSearchParams(location.search);
        boardID = urlSearch.get('boardID')
        console.log(boardID);
        board_input.value = boardID;
        board_input.focus();
    </script>
    `
}