// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the submit button in the html file
var clickHandler = d3.select("#filter-btn");

//Click event
clickHandler.on("click", function() {

//Remove existing table
d3.select("tbody").html("");

//Prevent page from refreshing
d3.event.preventDefault();

// Get the value property of the input elements and set all text to lowercase
var dateTime = d3.select("#datetime").property("value");

var selectedCountry = d3.select("#country").property("value").toLowerCase();

var selectedState = d3.select("#state").property("value").toLowerCase();

var selectedCity = d3.select("#city").property("value").toLowerCase();

var selectedShape = d3.select("#shape").property("value").toLowerCase();

var selectedDuration = d3.select("#durationMinutes").property("value").toLowerCase();

// initialize tableData as filteredData
filteredData = tableData;

if (dateTime) {
    filteredData = filteredData.filter(record => record.datetime === dateTime);
}
if (selectedCountry) {
    filteredData = filteredData.filter(record => record.country === selectedCountry);
}
if (selectedState) {
    filteredData = filteredData.filter(record => record.state === selectedState);
}
if (selectedCity) {
    filteredData = filteredData.filter(record => record.city === selectedCity);
}
if (selectedShape) {
    filteredData = filteredData.filter(record => record.shape === selectedShape);
}
if (selectedDuration) {
    filteredData = filteredData.filter(record => record.durationMinutes === selectedDuration);
}
// Display the filtered dataset

filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});
});