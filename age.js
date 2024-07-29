let margin = { top: 10, right: 30, bottom: 30, left: 50 },
  width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

const minYear = 1985;
const maxYear = 2015;

const minFactor = 0.75;
let minSuicides = 99999;
let maxSuicides = 0;

computeSuicidesMinMax(a0514);
computeSuicidesMinMax(a1524);
computeSuicidesMinMax(a2534);
computeSuicidesMinMax(a3554);
computeSuicidesMinMax(a5574);
computeSuicidesMinMax(a7599);

function computeSuicidesMinMax(dataset) {
  minSuicidesNew = d3.min(dataset, (d) => d.suicides);

  maxSuicidesNew = d3.max(dataset, (d) => d.suicides);

  if (+minSuicidesNew < +minSuicides) {
    minSuicides = minSuicidesNew;
  }
  if (+maxSuicidesNew > +maxSuicides) {
    maxSuicides = maxSuicidesNew;
  }
}

let minSuicidesDisplay = minSuicides * minFactor;

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

  // a0514
  let patha0514 = vis
    .append('path')
    .datum(a0514)
    .attr('fill', 'none')
    .attr('stroke', '#F0F0F0ff')
    .attr('stroke-width', '2');

  let linea0514 = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  patha0514.attr('d', linea0514);

  // a1524
  let patha1524 = vis
    .append('path')
    .datum(a1524)
    .attr('fill', 'none')
    .attr('stroke', '#C8C8C8ff')
    .attr('stroke-width', '2');

  let linea1524 = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  patha1524.attr('d', linea1524);

  // a2534
  let patha2534 = vis
    .append('path')
    .datum(a2534)
    .attr('fill', 'none')
    .attr('stroke', '#A0A0A0ff')
    .attr('stroke-width', '2');

  let linea2534 = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  patha2534.attr('d', linea2534);

  // a3554
  let patha3554 = vis
    .append('path')
    .datum(a3554)
    .attr('fill', 'none')
    .attr('stroke', '#787878ff')
    .attr('stroke-width', '2');

  let linea3554 = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  patha3554.attr('d', linea3554);
  // a5574
  let patha5574 = vis
    .append('path')
    .datum(a5574)
    .attr('fill', 'none')
    .attr('stroke', '#505050ff')
    .attr('stroke-width', '2');

  let linea5574 = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  patha5574.attr('d', linea5574);
  // a7599
  let patha7599 = vis
    .append('path')
    .datum(a7599)
    .attr('fill', 'none')
    .attr('stroke', '#282828ff')
    .attr('stroke-width', '2');

  let linea7599 = d3
    .line()
    .x((d) => xScale(d.year))
    .y((d) => yScale(d.suicides));

  patha7599.attr('d', linea7599);
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
