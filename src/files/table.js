if (!d3.chart) d3.chart = {};

d3.chart.table = function(){
  var rawHTML = "<td>{{firstName}}</td><td>{{lastName}}</td>{{#each assignments}}<td>{{#if this}}<a href='{{this}}'>X</a>{{else}}_{{/if}}</td>{{/each}}</td>";
  var template = Handlebars.compile(rawHTML);
  var data;
  var div;
  var dispatch = d3.dispatch(chart, "hover")


  function chart(container) {
    div = container;
    update();
  }

  function update() {
    div.selectAll('tr')
      .data(data, function(d){
        if(d){
          return d.studentId;
        }
      })
      .enter()
      .append('tr')
      .html(function(d){
        return template(d);
      })
      .on("mouseover", function(d) {
        d3.select(this).style({"background": "#dfefef"});
        dispatch.hover([d]);
      })
      .on("mouseout", function(d) {
        d3.select(this).style({"background-color": ""});
        dispatch.hover([]);
      }) 
  };

  chart.highlight = function(data) {
    div.selectAll("tr").selectAll("td").style({
      "background-color": ""
    })
    var trs = div.selectAll("tr").data(data, function(d) { 
      if(d){
        return d.studentId;
      }
    });
    trs.selectAll("td").style({
      "background-color": "#dfefef",
    })
  } 

  chart.data = function(value) {
    if (!arguments.length) return data;
    data = value;
    return chart;
  }
  return d3.rebind(chart, dispatch, "on");
}
