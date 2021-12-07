$(document).ready(function(){
    currentDay.append(moment().format('MMMM Do YYYY'))
});


var time = moment().format('HH');
var lineTime = $(".lineTime");

console.log(lineTime)
console.log(time)

var saveButton = $(".button-addon2");
var text = $(".form-control");

//saveButton.css("backgroundColor", "blue");
 //console.log(saveButton)

saveButton.each(function(index) {
//    console.log($(this).parent().siblings("input").val())
    $(this).click (function () {
        var itemKey = index;
        localStorage.setItem(itemKey, $(this).parent().siblings("input").val())
    } )
})

text.each(function(index) {
    // console.log($(this).parent().siblings("input").val())
    $(this).val(localStorage.getItem(index));
})

lineTime.each(function () {
    var closeLine = $(text).closest("input");
    var lineId = $(this).attr("id");
    console.log(closeLine)
    
    if (lineId < time) {
        closeLine.css("backgroundColor", "grey");
    };

    if (lineId > time) {
        closeLine.css("backgroundColor", "green");
    };

    if (lineId === time) {
        closeLine.css("backgroundColor", "red");
    };
})


