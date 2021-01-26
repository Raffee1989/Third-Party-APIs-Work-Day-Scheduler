// Current day shown on top of the page.
var currentDay = moment().format("MM DD YYYY");
$("#currentDay").text(currentDay);

// Selecting the container by its class. 
var container = $(".container");

// Array of times to be placed in each row. 
var eachHour = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

// Looping through array made above. 
for (let i = 0; i < eachHour.length; i++) {

    // Variable called "row" to create containing (time block, inputs and button). 
    var row = $("<div>").addClass("row");

    // Variable called "timeBlock" to display the array hours in our time block div
    var hourBlock = $("<div>").addClass("time-block hour col-1").text(eachHour[i]); 

    // Variable called "textArea" to create inputarea for user. 
    var inputArea = $("<input>").addClass("col-10");

    // Variable called "button" created to save our inputs. 
    var saveButton = $("<button>").addClass("saveBtn col-1");

    // Displaying or appending "rows" created above inside "container".
    container.append(row);

    // Displaying or appending "timeBlock", "textArea", "button".
    row.append(hourBlock, inputArea, saveButton);
}