// country, year, sex, age,	suicides

function loadData() {
  d3.csv('us.csv').then(function (data) {
    displayPage(data);
  });
}

const width = 1000;
const height = 1000;

function displayPage(data) {
  svg = d3.select('body').append('svg');

  svg
    .data(data)
    .attr('width', width)
    .attr('height', height)
    .style('background', 'pink');

  // 1985
  yearMin = d3.min(data, function (d) {
    return d.year;
  });
  // 2015
  yearMax = d3.max(data, function (d) {
    return d.year;
  });
  // 0.23
  suicidesMin = d3.min(data, function (d) {
    return d.suicides;
  });
  // 9.94
  suicidesMax = d3.max(data, function (d) {
    return d.suicides;
  });
}
