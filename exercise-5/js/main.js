// Hints: 
// Use loops, map, or foreach statements whenever necessary.
//
// To do a standard for loop as you would in java use the syntax
// for (var i = 0; i < number; i++) {}
//
// Elements must be added to the DOM before you can do things like
// set CSS styles of assign events to them.
$(document).ready(function() {
    // These set some default values for
    // the height and width of the grid, available colors to draw with,
    // and the default selected color
    var gridHeight = 5;
    var gridWidth = 5;
    var colors = ["red", "blue", "green", "black", "white"];
    var selectedColor = "red";

    // Select the table which will hold out board by its id
    var table = $('#board');
    // Make n table rows where n is the height of the grid
    for (n = 0; n < gridHeight; n++) {
        //Append each row to the grid
    	var tr = $('<tr>');

	    // In each table row, make m table data elements, where
	    // m is the width of the grid
    	for (m = 0; m < gridWidth; m++) {
    		// Append each table data element to the current row
    		var td = $('<td>');
    		tr.append(td);
		    // Once the table data element has been appended to the row,
		    // assign a click event that will change this element's
		    // background color to the value of selectedColor
		    td.click(function() {
		    	$(this).css('background-color', selectedColor);
		    });
    	}

    	table.append(tr);
    }

    // Select the table which will hold our color palette by
    // its id
    var palette = $('#palette');

    // For each color in colors, make a table row with one table data
    // element in it. Set the table data's background color to its
    // corresponding color. The table data elements should have a
    // class of colorSwatch
    colors.forEach(function(d) {
    	var row = $('<tr>');
    	var cell = $('<td class="colorSwatch">');
        row.append(cell);
        palette.append(row);
        cell.css("background-color", c);
        cell.on("click", function() {
            selectedColor = c;
        });s
    });

        // Assign a click event to the table data element so that when it is
        // clicked, selectedColor will be set to that element's corresponding
        // color.
});
// Bonus: Play around with the grid size and available colors to see if you can
//        make your website a little more fun
