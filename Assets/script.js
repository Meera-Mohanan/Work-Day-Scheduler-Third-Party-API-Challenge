$(function () {
    // function to display day, date and time
    function displayTime() {
        var rightNow = dayjs().format("dddd - MMM DD, YYYY - hh:mm:ss a");
        $("#currentDay").text(rightNow);
    }
    displayTime();
    setInterval(displayTime, 1000);

    //applying an event listener on the save button
    $(".saveBtn").on("click", function () {
        var key = $(this).parent().attr("id"); // this refers to the elements the function is tied to
        var value = $(this).siblings("textarea").val();

        // storing items in the local storage
        localStorage.setItem(key, value);
    });
    // applying a loop so that the description for all the hours is saved in the local storage
    for (let i = 9; i < 18; i++) {
        $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i));
    }