const tbody = document.getElementById("tbody");
const thead = document.getElementById("thead");

function getForm() {
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // save values
    var min_col_val = parseInt(document.getElementById("min_col_val").value);
    var max_col_val = parseInt(document.getElementById("max_col_val").value);
    var min_row_val = parseInt(document.getElementById("min_row_val").value);
    var max_row_val = parseInt(document.getElementById("max_row_val").value);

    // clears tbody and thead for empty table
    tbody.innerHTML = "";
    thead.innerHTML = "";

    console.log(min_col_val);

    if (min_col_val > 250 || max_col_val > 250 || min_row_val > 250 || max_row_val > 250) {
      alert("Values can't exceed 250!");
      return 0;
    }

    if (min_col_val > max_col_val) {
      alert("Your max col value needs to be bigger than your min col value.");
    } else if (min_row_val > max_row_val) {
      alert("Your max row value needs to be bigger than your min row value.");
    } else {
      const trHeader = document.createElement("tr");
      trHeader.appendChild(document.createElement("th"));
      for (var col = min_col_val; col <= max_col_val; col++) {
        const th = document.createElement("th");
        th.innerText = col;
        trHeader.appendChild(th);
      }
      thead.appendChild(trHeader);

      for (var row = min_row_val; row <= max_row_val; row++) {
        const trData = document.createElement("tr");
        const th = document.createElement("th");
        th.innerText = row;
        trData.appendChild(th);
        for (var col = min_col_val; col <= max_col_val; col++) {
          const td = document.createElement("td");
          // Calculate and display the result in the cell
          const result = row * col;
          td.innerText = result;
          trData.appendChild(td);
        }
        tbody.appendChild(trData);
      }
    }
    form.reset();
  });
}

getForm();
