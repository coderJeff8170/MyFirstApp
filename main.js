//this is going to load the jquery ready function so that we wait for the page to load before the js
$(document).ready(function () {
    console.log('you are reading this from the console');
    //document.getElementByName(h1).style.color = "red";
    $("h1").css("color", "red");
    //changes h1 elements to red (jquery)

    paper.install(window);
    // paper.setup(document.getElementById("mainCanvas"));
    paper.setup($("#mainCanvas")[0]);
    //^^ installs paper to the window with the id "mainCanvas"

    /*the dollar sign is a variable, created by jquery - it has one parameter - document - which has a ready function,
    so when it's ready, it'll excecute the other function.*/

    // for (var i = 0; i < 1000000000; i++);
    // $("h1").innerHtml = "Changed from main.js";

    var tool = new Tool();
    //creates a temporary variable tool to use in the next function.

    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point.x, event.point.y, 20);
        // var c = Shape.Circle(200, 200, 50);
        //draws circles when mouse is clicked
        c.fillColor = "green";
        //fills the circle with green
    }
    paper.view.draw();
    //calls the draw function
});


