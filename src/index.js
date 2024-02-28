const input_box = document.getElementById("inputBox");
input_box.focus();
const tag_editor = document.getElementById("tagEditor");
const tag_container = tag_editor.firstElementChild;

input_box.addEventListener("keydown", (event) => {
    if (event.isComposing) return;
    alert(event.key);
    if (event.key === ' ') {
        let newTag = document.createElement("span");
        newTag.classList.add("char-btn");
        let newContent = document.createTextNode(input_box.textContent);
        newTag.appendChild(newContent)

        tag_container.insertBefore(newTag, input_box)
        input_box.textContent = ""
        event.preventDefault()
    } else if (event.key === 'Backspace') {
        if (input_box.textContent === "" && tag_container.childElementCount >= 2) {
            let tag_to_erase = Array.from(document.querySelectorAll("span:nth-last-of-type(2)")).pop();
            tag_to_erase.remove();
        }
    }
    // do something
});
