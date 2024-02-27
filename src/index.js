const input_box = document.getElementById("inputBox");
input_box.focus();
const tag_editor = document.getElementById("tagEditor");
// const tag_container = tag_editor.getElementsByClassName("tag-container");

input_box.addEventListener("keydown", (event) => {
    if (event.isComposing) return;
    if (event.code === 'Space') {
        let newTag = document.createElement("span");
        newTag.classList.add("char-btn");
        let newContent = document.createTextNode(input_box.textContent);
        newTag.appendChild(newContent)

        tag_editor.insertBefore(newTag, input_box)
        input_box.textContent = ""
        event.preventDefault()
    }
    // do something
});
