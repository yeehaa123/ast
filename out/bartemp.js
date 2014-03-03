if (!d3.chart) d3.chart = {};

d3.chart.table = function(){

  function drawGraph(){

    var margin = { top: 20, right: 20, bottom: 20, left: 40 };
    var width = 800 - margin.left - margin.right;
    var height = 550 - margin.top - margin.bottom;
    var chartHeight = 350;

    var svg = d3.select('.graph')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    var xScale = d3.scale.ordinal()
      .domain(d3.range(students.length))
      .rangeRoundBands([0, width], 0.2);

    var yScale = d3.scale.linear()
      .domain([0, 8])
      .range([chartHeight, 0]);

    var colorScale = d3.scale.linear()
      .domain([0, 8])
      .range(['yellow', 'green']);

    var yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(5);

    var bars = svg.selectAll('g')
      .data(students)
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
      });

      bars.append('rect')
        .attr('x', 0)
        .attr('y', function(d) {
          return yScale(d.numberOfAssignments);
        })
        .attr('width', xScale.rangeBand()) 
        .attr('height', function(d){
          return chartHeight - yScale(d.numberOfAssignments);
        })
        .attr('fill', function(d){
          return colorScale(d.numberOfAssignments);
        });

      bars.append("text")
        .text(function(d) { 
          if(d.numberOfAssignments != 0) {
            return d.numberOfAssignments; 
          }
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
        .attr("y", function(d) { return yScale(d.numberOfAssignments) + 20; })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");

      bars.append("text")
        .text(function(d){
          return d.firstName + " " + d.lastName;
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
  };
};
