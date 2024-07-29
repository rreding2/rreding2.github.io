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
let minSuicides = 99999;
let maxSuicides = 0;

computeSuicidesMinMax(a0514male);
computeSuicidesMinMax(a1524male);
computeSuicidesMinMax(a2534male);
computeSuicidesMinMax(a3554male);
computeSuicidesMinMax(a5574male);
computeSuicidesMinMax(a7599male);

computeSuicidesMinMax(a0514female);
computeSuicidesMinMax(a1524female);
computeSuicidesMinMax(a2534female);
computeSuicidesMinMax(a3554female);
computeSuicidesMinMax(a5574female);
computeSuicidesMinMax(a7599female);

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

let s0514male = false;
let s1524male = false;
let s2534male = true;
let s3554male = false;
let s5574male = false;
let s7599male = false;
let s0514female = false;
let s1524female = false;
let s2534female = true;
let s3554female = false;
let s5574female = false;
let s7599female = false;

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
    .attr(
      'transform',
      'translate(' + margin.left + ',' + (margin.top - 10) + ')'
    );

  // a0514male
  if (s0514male) {
    let patha0514male = vis
      .append('path')
      .datum(a0514male)
      .attr('fill', 'none')
      .attr('stroke', '#00DAF7ff')
      .attr('stroke-width', '2');

    let linea0514male = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha0514male.attr('d', linea0514male);
  }

  // a1524male
  if (s1524male) {
    let patha1524male = vis
      .append('path')
      .datum(a1524male)
      .attr('fill', 'none')
      .attr('stroke', '#00BFD8ff')
      .attr('stroke-width', '2');

    let linea1524male = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha1524male.attr('d', linea1524male);
  }

  // a2534male
  if (s2534male) {
    let patha2534male = vis
      .append('path')
      .datum(a2534male)
      .attr('fill', 'none')
      .attr('stroke', '#00A4B9ff')
      .attr('stroke-width', '2');

    let linea2534male = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha2534male.attr('d', linea2534male);
  }

  // a3554male
  if (s3554male) {
    let patha3554male = vis
      .append('path')
      .datum(a3554male)
      .attr('fill', 'none')
      .attr('stroke', '#00889Aff')
      .attr('stroke-width', '2');

    let linea3554male = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha3554male.attr('d', linea3554male);
  }

  // a5574male
  if (s5574male) {
    let patha5574male = vis
      .append('path')
      .datum(a5574male)
      .attr('fill', 'none')
      .attr('stroke', '#505050ff')
      .attr('stroke-width', '2');

    let linea5574male = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha5574male.attr('d', linea5574male);
  }

  // a7599male
  if (s7599male) {
    let patha7599male = vis
      .append('path')
      .datum(a7599male)
      .attr('fill', 'none')
      .attr('stroke', '#00525Dff')
      .attr('stroke-width', '2');

    let linea7599male = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha7599male.attr('d', linea7599male);

    svg
      .append('g')
      .attr(
        'transform',
        'translate(' + (width - 253) + ',' + (margin.top + 160) + ')'
      )
      .append('text')
      .text('Men 75 and older have the greatest risk of suicide.')
      .attr('stroke', 'red')
      .attr('stroke-width', 0.25);
  }

  // a0514female
  if (s0514female) {
    let patha0514female = vis
      .append('path')
      .datum(a0514female)
      .attr('fill', 'none')
      .attr('stroke', '#F7CE00ff')
      .attr('stroke-width', '2');

    let linea0514female = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha0514female.attr('d', linea0514female);
  }

  // a1524female
  if (s1524female) {
    let patha1524female = vis
      .append('path')
      .datum(a1524female)
      .attr('fill', 'none')
      .attr('stroke', '#D8B400ff')
      .attr('stroke-width', '2');

    let linea1524female = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha1524female.attr('d', linea1524female);
  }

  // a2534female
  if (s2534female) {
    let patha2534female = vis
      .append('path')
      .datum(a2534female)
      .attr('fill', 'none')
      .attr('stroke', '#B99B00ff')
      .attr('stroke-width', '2');

    let linea2534female = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha2534female.attr('d', linea2534female);
  }

  // a3554female
  if (s3554female) {
    let patha3554female = vis
      .append('path')
      .datum(a3554female)
      .attr('fill', 'none')
      .attr('stroke', '#9A8100ff')
      .attr('stroke-width', '2');

    let linea3554female = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha3554female.attr('d', linea3554female);
  }

  // a5574female
  if (s5574female) {
    let patha5574female = vis
      .append('path')
      .datum(a5574female)
      .attr('fill', 'none')
      .attr('stroke', '#7C6700ff')
      .attr('stroke-width', '2');

    let linea5574female = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha5574female.attr('d', linea5574female);
  }

  // a7599female
  if (s7599female) {
    let patha7599female = vis
      .append('path')
      .datum(a7599female)
      .attr('fill', 'none')
      .attr('stroke', '#5D4D00ff')
      .attr('stroke-width', '2');

    let linea7599female = d3
      .line()
      .x((d) => xScale(d.year))
      .y((d) => yScale(d.suicides));

    patha7599female.attr('d', linea7599female);
  }
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

function c0514male(checkboxElem) {
  s0514male = checkboxElem.checked;
  displayGraph();
}
function c1524male(checkboxElem) {
  s1524male = checkboxElem.checked;
  displayGraph();
}
function c2534male(checkboxElem) {
  s2534male = checkboxElem.checked;
  displayGraph();
}
function c3554male(checkboxElem) {
  s3554male = checkboxElem.checked;
  displayGraph();
}
function c5574male(checkboxElem) {
  s5574male = checkboxElem.checked;
  displayGraph();
}
function c7599male(checkboxElem) {
  s7599male = checkboxElem.checked;
  displayGraph();
}
function c0514female(checkboxElem) {
  s0514female = checkboxElem.checked;
  displayGraph();
}
function c1524female(checkboxElem) {
  s1524female = checkboxElem.checked;
  displayGraph();
}
function c2534female(checkboxElem) {
  s2534female = checkboxElem.checked;
  displayGraph();
}
function c3554female(checkboxElem) {
  s3554female = checkboxElem.checked;
  displayGraph();
}
function c5574female(checkboxElem) {
  s5574female = checkboxElem.checked;
  displayGraph();
}
function c7599female(checkboxElem) {
  s7599female = checkboxElem.checked;
  displayGraph();
}
