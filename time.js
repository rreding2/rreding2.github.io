const minYear = 1985;
const maxYear = 2015;
const minSuicides = 0;
let maxSuicides = 0;

const width = 800;
const height = 800;

let lineUS = d3.line();
let lineCanada = d3.line();

let xScale = d3.scaleLinear().domain([minYear, maxYear]).range(0, width);
let yScale = d3.scaleLinear().domain([0, 30]).range(height, 0);

let us;
let canada;

let lineScale = d3
  .line()
  .x(function (d) {
    return xScale(d.year);
  })
  .y(function (d) {
    return yScale(d.suicides);
  });

function loadData() {
  let svg = d3
    .select('#graph')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', 'pink');

  d3.csv('us.csv').then(function (data) {
    svg.append('path').attr({ d: lineScale(data) });
  });
}
