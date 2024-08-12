module.exports = () => {
    return`<div class="w-full h-full bg-gray-100 flex flex-col justify-center items-center content-center">
    <div class="max-w-md flex flex-col justify-center content-center">
        <p>enter a board name to visit a board or make one</p>
        <form action="/new_board" method="post">
        <input id="board_id" type="text" name="board_id" placeholder="board name" class="p-2 w-full b-solid b-gray-300 b-1 rounded-md"/>
        <button type="submit" hidden="true" class="p-2 w-full bg-blue-600 text-white rounded-md">Go</button>
        </form>
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