var eventsJSON = localStorage.getItem('assignment');
var events = JSON.parse(eventsJSON).events;
var data = events;

var width = 600;
var height = 300; 

var svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

var xScale = d3.scale.ordinal()
  .domain(d3.range(data.length))
  .rangeRoundBands([0, width], 0.2);

var yScale = d3.scale.linear()
  .domain([0, d3.max(data, function(d) { return d.rating; })])
  .range([height, 0])

var bars = svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', function(d,i) {
    return xScale(i);
  })
  .attr('y', function(d) {
    return yScale(d.rating);
  })
  .attr('width', xScale.rangeBand()) 
  .attr('height', function(d){
    return height - yScale(d.rating);
  })
  .attr('fill', function(d){
    if(d.ficticious){
      return 'red';
    }
    return 'green';
  });
