const lower = document.getElementById('lower-case')
const upper = document.getElementById('upper-case')
const proper = document.getElementById('proper-case')
const sentence = document.getElementById('sentence-case')
const saveText = document.getElementById('save-text-file')
let text = document.querySelector('.text')

lower.addEventListener('click', () => {
    text.value = text.value.toLowerCase()
})


upper.addEventListener('click', () => {
    text.value = text.value.toUpperCase()
})


function upperCaseFunction(match) {
    return match.toUpperCase();
}
proper.addEventListener('click', () => {
    text.value = text.value.replace(/(^\w|\s\w)/g, upperCaseFunction)
})


sentence.addEventListener('click', () => {
    text.value = text.value.toLowerCase()
    text.value = text.value.replace(/(^\w|\.\s\w|\.\w)/g, upperCaseFunction);
})


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveText.addEventListener("click", () => download('text.txt', text.value));