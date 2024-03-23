function biggerClick(){
    document.getElementById("textInput").style.fontSize="24px"
}

function changeStyle() {
    let radioButton = document.getElementById("fancyRadio")
    if (radioButton.checked)
        document.getElementById("textInput").style.fontWeight="bold"
    else
        document.getElementById("textInput").style.fontWeight="normal"
}