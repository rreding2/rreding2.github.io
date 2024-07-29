d3.select('body')
  .select('div')
  .style('opacity', 0)
  .transition()
  .duration(1000)
  .style('opacity', 1);
