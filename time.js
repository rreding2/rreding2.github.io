const minYear = 1985;
const maxYear = 2015;
const minSuicides = 0;
let maxSuicides = 0;

const width = 800;
const height = 400;

let xScale = d3.scaleLinear().domain([minYear, maxYear]).range([0, width]);
let yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

let svg = d3.select('#graph').append('svg');
svg.attr('width', width).attr('height', height);

let line = d3
  .line()
  .x((d) => xScale(d.year))
  .y((d) => yScale(d.suicides));

svg
  .append('path')
  .datum(us)
  .attr('fill', 'none')
  .attr('stroke', 'black')
  .attr('stroke-width', '2')
  .attr('d', line);
