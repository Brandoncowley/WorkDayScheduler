var DateTime = luxon.DateTime
var dt = DateTime.now()
console.log(dt.toLocaleString(DateTime.DATETIME_MED))
var dateDiv = "#currentDay"

$(dateDiv).text(dt.toLocaleString(DateTime.DATETIME_MED))
console.log($(dateDiv).text())