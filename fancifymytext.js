function biggerClick(){
    document.getElementById("textInput").style.fontSize="24px"
}

function changeStyle() {
    let radioButton = document.getElementById("fancyRadio")
    if (radioButton.checked) {
        let text = document.getElementById("textInput")
        text.style.fontWeight = "bold"
        text.style.textDecoration = "underline"
        text.style.color = "blue"
    } else {
        let text = document.getElementById("textInput")
        text.style.fontWeight = "normal"
        text.style.textDecoration = "none"
        text.style.color = "black"
    }
}

function mooClick() {
    let text = document.getElementById("textInput").value;
    let sentences = text.split('.');
    for (let i = 0; i < sentences.length; i++)
    {
        let sentence = sentences[i].trim()
        let words = sentence.split(' ')
        let lastWordIndex = words.length - 1
        let lastWord = words[lastWordIndex];
        if (lastWord.trim() !== "") {
            words[lastWordIndex] = lastWord + "-moo";
        }
        sentences[i] = words.join(' ');
    }
    document.getElementById("textInput").value = sentences.join('. ');
}