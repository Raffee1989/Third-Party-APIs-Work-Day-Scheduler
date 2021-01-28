// Current day shown on top of the page.
var currentDay = moment().format("MM DD YYYY");
$("#currentDay").text(currentDay);


// Selecting the container by its class. 
var container = $(".container");

// // Array of times to be placed in each row. 
var eachHour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

// Looping through array made above. 
for (let i = 0; i < eachHour.length; i++) {

    // Creating rows which contains "div/textarea/button" elements inside. 
    var row = $("<div>").addClass("row");

    // To display each hour in our time block divs
    var timeBlock = $("<div>").addClass("col-1 time-block ").text(eachHour[i]);

    // Creating textarea for user inputs
    var eventArea = $("<textarea placeholder = 'Event'>").addClass("col-10 hour ").attr("id", eachHour[i]);

    // Variable called "saveButton" created to save our inputs. 
    var saveButton = $("<button>").addClass("saveBtn col-1").text("Save");

    // Appending "rows"
    container.append(row);

    // Appending "div/textarea/button" inside "row"
    row.append(timeBlock, eventArea, saveButton);
}

// Inputs of textarea will be saved in local storage.
$(".saveBtn").on("click", function () {
    
    var textContent = $(this).prev().val(); 
    var timeEl = $(this).prev().prev().text(); 
    localStorage.setItem(timeEl, textContent);
});

// Inputs of textarea will be saved and displayed
for (var t = 0; t < eachHour.length; t++) {
    var timeId = document.getElementById(eachHour[t]); 
    var getInput = localStorage.getItem(eachHour[t])  
    timeId.textContent = getInput
}

