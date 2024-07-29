d3.select('body')
  .select('div')
  .style('opacity', 0)
  .transition()
  .duration(1000)
  .style('opacity', 1);

let margin = { top: 10, right: 30, bottom: 30, left: 50 },
  width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const minYear = 1985;
const maxYear = 2015;

const minFactor = 0.95;
let minSuicides = d3.min(us, (d) => d.suicides) * minFactor;
let maxSuicides = d3.max(us, (d) => d.suicides);
let minSuicidesDisplay = minSuicides;

console.log(minSuicides);

function displayGraph() {
  let xScale = d3.scaleLinear().domain([minYear, maxYear]).range([0, width]);
  let yScale = d3
    .scaleLinear()
    .domain([minSuicidesDisplay, maxSuicides])
    .range([height, 0]);

  xAxis = d3
    .axisBottom(xScale)
    .tickValues([1985, 1990, 1995, 2000, 2005, 2010, 2015])
    .tickFormat((x) => `${x.toFixed(0)}`);

  yAxis = d3.axisLeft(yScale);

  d3.select('#graph').select('svg').remove();
  let svg = d3.select('#graph').append('svg');

  legend = svg
    .append('g')
    .attr('transform', 'translate(' + (width - 180) + ',' + margin.top + ')')
    .append('text')
    .text('Suicides per 100,000 People by Year')
    .attr('stroke', '#F5F5F5')
    .attr('stroke-width', 0.25);

  svg
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom);

  let vis = svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  let path = vis
    .append('path')
    .datum(us)
    .transition()
    .duration(3000)
    .attr('fill', 'none')
    .attr('stroke', 'black')
    .attr('stroke-width', '2');

  let line = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  path.attr('d', line);

  svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + height + ')')
    .attr('fill', 'none')
    .attr('font-size', '10')
    .attr('font-family', 'sans-serif')
    .call(xAxis)
    .attr('text-anchor', 'middle');

  svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + 0 + ')')
    .attr('fill', 'none')
    .attr('font-size', '10')
    .attr('font-family', 'sans-serif')
    .call(yAxis)
    .attr('text-anchor', 'end');
}

function zoom(checkboxElem) {
  if (checkboxElem.checked) {
    minSuicidesDisplay = minSuicides * minFactor;
  } else {
    minSuicidesDisplay = 0;
  }
  displayGraph();
}
