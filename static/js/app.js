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

function handleCLick(){
  // Grab the datetime value from the filter
  let date = d3.select("#dateTime").property("value");
  let fileredtData = tableData;

  // Check to see if a data was entered and filter the data using that date.
  if (date) {
    // Apply `filter` to the table data to only keep the rows where the
    // `datetime` value matches the filter value
    filteredData = filteredData.filter(row => row.datetime === date);
  };

  // Rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will just be the original tableData
  buildTable(filteredData);
}

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
