// import the daata from data.js
const tableData = data;

function buildTable(date){
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // Append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataROw).forEach((val) => {
      let cell = row.append("td);
      cell.text.(val);
      }
    );
  });
}

