function countLetter() {
    const element = document.querySelector("#input");
    const text = document.querySelector("#count");
    text.innerHTML = element.value.length
}