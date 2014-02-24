var eventsJSON = localStorage.getItem('assignment');
var events = JSON.parse(eventsJSON).events;
var data = events;

var margin = { top: 20, right: 20, bottom: 20, left: 40 };
var width = 600 - margin.left - margin.right;
var height = 550 - margin.top - margin.bottom;
var chartHeight = 400;

var svg = d3.select('body')
  .append('svg')
  .attr('width', width + margin.left + margin.right)
  .attr('height', height + margin.top + margin.bottom)
  .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

  var xScale = d3.scale.ordinal()
  .domain(d3.range(data.length))
  .rangeRoundBands([0, width], 0.2);

  var yScale = d3.scale.linear()
  .domain([0, d3.max(data, function(d) { return d.rating; })])
  .range([chartHeight, 0])

  var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5);

  var bars = svg.selectAll('g')
    .data(data)
    .enter()
    .append('g')
    .attr('x', function(d,i) {
      return xScale(i) + xScale.rangeBand();
    })
    .attr('width', xScale.rangeBand() + 10)
    .attr('height', chartHeight)
    .append('g')
    .attr("transform", function(d, i) {
      return "translate(" + xScale(i) + "," + 0 + ")";
    })

    bars.append('rect')
    .attr('x', 0)
    .attr('y', function(d) {
      return yScale(d.rating);
    })
    .attr('width', xScale.rangeBand()) 
    .attr('height', function(d){
      return chartHeight - yScale(d.rating);
    })
    .attr('fill', function(d){
      if(d.ficticious){
        return 'red';
      }
      return 'green';
    });

  bars.append("text")
    .text(function(d) { return d.rating; })
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", function(d) { return yScale(d.rating) + 20; })
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "white");

  bars.append("text")
    .text(function(d){
      return d.title;
    })
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", chartHeight + 10)
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "black")
    .style("writing-mode", "tb");

  svg.append("g")
    .attr("class", "axis")
    .call(yAxis);
