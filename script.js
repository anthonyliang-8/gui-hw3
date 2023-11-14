/*
  Name: Anthony Liang
  Course: GUI I
  Email: anthony_liang@student.uml.edu
*/
// setting all elements to values
const tbody = document.getElementById("tbody");
const thead = document.getElementById("thead");
const formDiv = document.getElementById("form-div");
const err = document.getElementById("err");

function getForm() {
  const form = document.getElementById("form");
  // event listener for the button in the form
  // pass event (e = click)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // save values and parse all of them as integers so calculations will be done correctly
    var min_col_val = parseInt(document.getElementById("min_col_val").value);
    var max_col_val = parseInt(document.getElementById("max_col_val").value);
    var min_row_val = parseInt(document.getElementById("min_row_val").value);
    var max_row_val = parseInt(document.getElementById("max_row_val").value);

    // clears tbody and thead for empty table
    tbody.innerHTML = "";
    thead.innerHTML = "";

    // checks to maek sure all values are under 250
    // on my own computer, I can handle values up to 500. for the sake of this assignment, I have
    // limited it to only 249
    if (
      min_col_val > 250 ||
      max_col_val > 250 ||
      min_row_val > 250 ||
      max_row_val > 250
    ) {
      alert("Values can't exceed 250!");
      return 0;
    }

    // if-else statements to perform error handling for min values bigger than max values
    // error handling for both min values being bigger
    if (min_col_val > max_col_val && min_row_val > max_row_val) {
      // clear contents of the p element so text won't be repeated
      err.innerHTML = "";
      err.innerHTML =
        "Both your max col and row values need to be bigger than their min values.";
      formDiv.appendChild(err);
    } else if (min_row_val > max_row_val) {
      // error handling for min row value being bigger than max row value
      // clear contents of the p element so text won't be repeated
      err.innerHTML = "";
      err.innerHTML =
        "Your max row value needs to be bigger than your min row value.";
      formDiv.appendChild(err); // append text to the form div
    } else if (min_col_val > max_col_val) {
      // error handling for min col value being bigger than max col value
      // clear contents of the p element so text won't be repeated
      err.innerHTML = "";
      err.innerHTML =
        "Your max col value needs to be bigger than your min col value.";
      formDiv.appendChild(err);
    } else {
      // create a table row element specifically for the header
      const trHeader = document.createElement("tr");
      // append a table header to the table row
      trHeader.appendChild(document.createElement("th"));
      // iterate through columns and create table header cells
      for (var col = min_col_val; col <= max_col_val; col++) {
        const th = document.createElement("th");
        th.innerText = col;
        trHeader.appendChild(th);
      }
      thead.appendChild(trHeader);

      // iterate through rows to create table data rows
      for (var row = min_row_val; row <= max_row_val; row++) {
        // create a table row element for data
        const trData = document.createElement("tr");
        // create a table header cell for the row header
        const th = document.createElement("th");
        th.innerText = row;
        trData.appendChild(th);
        // iterate through columns and create table header cells
        for (var col = min_col_val; col <= max_col_val; col++) {
          const td = document.createElement("td");
          // calculate and display the result in the cell
          const result = row * col;
          td.innerText = result;
          // append the data cell to the data row
          trData.appendChild(td);
        }
        tbody.appendChild(trData);  // append 
      }
    }
    form.reset();
  });
}

getForm();
