const minYear = 1985;
const maxYear = 2015;
const minSuicides = 0;
let maxSuicides = 0;

const width = 800;
const height = 800;

let lineUS = d3.line();
let lineCanada = d3.line();

let xScale = d3.scaleLinear().domain([minYear, maxYear]).range([0, width]);
let yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

function loadData() {
  console.log(xScale(2000));
  console.log(yScale(200));

  let svg = d3.select('#graph').append('svg');
  svg.attr('width', width).attr('height', height).style('background', 'pink');

  d3.csv('us.csv', function (data) {
    console.log(data);

    let lineScale = d3
      .line()
      .x(function (d, i) {
        return xScale(d.year);
      })
      .y(function (d) {
        return yScale(d.suicides);
      });

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', '5')
      .attr('d', lineScale());
  });
}
