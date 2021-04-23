var DateTime = luxon.DateTime
var dt = DateTime.now()
console.log(dt.toLocaleString(DateTime.DATETIME_MED))
var dateDiv = "#currentDay"

$(dateDiv).text(dt.toLocaleString(DateTime.DATETIME_MED))
console.log($(dateDiv).text())

var textInput = document.querySelector("text");
var saveButtonEl = $(".saveBtn");

renderLastRegistered();

function renderLastRegistered() {
    var text = localStorage.getItem("text");

    if (!text) {
        return;
    }

    text.textContent = text;
}

saveButtonEl.on('click', function () {
    preventDefault();

    var text = document.querySelector("#text").value;

    localStorage.setItem("text", text);
    renderLastRegistered();


})