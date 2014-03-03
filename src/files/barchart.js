if (!d3.chart) d3.chart = {};

d3.chart.barChart = function(){
  var data;
  var margin = { top: 20, right: 20, bottom: 20, left: 40 };
  var width = 800 - margin.left - margin.right;
  var height = 550 - margin.top - margin.bottom;
  var chartHeight = 335;
  var div;
  var dispatch = d3.dispatch(chart, "hover"); 
  var yScale, xScale, colorScale;

  function chart(container){
    div = container;
    var barChart = div.append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .classed('mainGroup', true)
      .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

    xScale = d3.scale.ordinal()
      .domain(d3.range(data.length))
      .rangeRoundBands([0, width], 0.2);

    yScale = d3.scale.linear()
      .domain([0, 8])
      .range([chartHeight, 0]);

    colorScale = d3.scale.linear()
      .domain([0, 8])
      .range(['yellow', 'green']);

    yAxis = d3.svg.axis()
      .scale(yScale)
      .orient("left")
      .ticks(5);

    var barsGroup = barChart.selectAll('g.data')
      .data(data, function(d) {
        return d.studentId;
      });

    barsGroup.enter()
      .append('g')
      .classed('data', true)
      .attr('x', function(d,i) {
         return xScale(i) + xScale.rangeBand();
      })
      .attr('width', xScale.rangeBand() + 10)
      .attr('height', chartHeight)
      .transition()
      .attr("transform", function(d, i) {
        return "translate(" + xScale(i) + "," + 0 + ")";
      });

    barsGroup.append('rect')

    barsGroup.exit().remove();

    barsGroup.append("text")
      .classed("count", true)

    barsGroup.append("text")
      .text(function(d){
        return d.firstName + " " + d.lastName;
      })
      .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
      .attr("y", chartHeight + 10)
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "black")
      .style("writing-mode", "tb");


    barChart.append("g")
      .attr("class", "axis")
      .call(yAxis);

    update();

  };

  function update(){
    var barChart = div.select('svg');
    var barsGroup = barChart.selectAll('g.data')

    bars = barsGroup.selectAll('rect')
      .data(data, function(d) {
        return d.studentId;
      })
  
    bars.transition().attr('x', 0)
      .attr('y', function(d) {
        return yScale(d.numberOfAssignments);
      })
      .attr('width', xScale.rangeBand()) 
      .attr('height', function(d){
        return chartHeight - yScale(d.numberOfAssignments);
      })
      .attr('fill', function(d){
      return colorScale(d.numberOfAssignments);
      })

    bars.on("mouseover", function(d){
        d3.select(this).style({"fill": "orange"});
        dispatch.hover([d]);
     }) 
     .on("mouseout", function(d){
        d3.select(this).style({"fill": ""});
        dispatch.hover([]);
     }) 

    count = barsGroup.selectAll('text.count')
      .data(data, function(d) {
        return d.studentId;
      })
    
    count.transition().text(function(d) { 
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
  };
  
  chart.update = update;

  chart.highlight = function(data) {
    div.selectAll("rect")
      .transition()
      .style({
        "fill": ""
       })
    var b = div.selectAll("rect").data(data, function(d) { return d.studentId });
    b.transition().style({
      "fill": "orange",
    })
  };

  chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    return chart;
  }

  return d3.rebind(chart, dispatch, "on");
};
