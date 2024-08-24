module.exports = (board_id) => {
    return `
    <form name="new_item" method="POST" action="/write_item/${board_id}" class="p-2 w-full flex row">
        <textarea id="content" type="text" name="content" placeholder="내용을 입력하세요" class="
        w-full shadow h-13 rounded-md p-2 b-1 b-solid b-gray
        " oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"'></textarea>
        <button type="submit" class="
        border-none bg-blue-600 ml-2 rounded-md text-white p-2 hidden
        ">ADD</button>
        <input type="file" name="file" hidden="true"/>
    </form>
    <script>
    function submitOnEnter(event) {
        if (event.which === 13 && !event.shiftKey) {
            if (!event.repeat) {

                // const newEvent = new Event("submit", {cancelable: true});
                event.target.form.submit();
                // event.target.form.dispatchEvent(newEvent);
            }

            event.preventDefault(); // Prevents the addition of a new line in the text field
        }
    }

    document.getElementById("content").addEventListener("keydown", submitOnEnter);
    </script>
    `
}