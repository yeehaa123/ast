// getting something from localstorage

localStorage.getItem('assignment');

// What is this? Document versus object...

JSON.parse(localStorage.getItem('assignment'));

// What to do with this? Variables

var eventsJSON = localStorage.getItem('assignment');
var events = JSON.parse(eventsJSON).events;
var data = events;

var svg = d3.select('body')
  .append('svg')
  .attr('width', 600)
  .attr('height', 300);

var bars = svg.selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', function(d,i) {
    return i * 20;
  })
  .attr('y', function(d) {
    return 300 - d.rating * 50;
  })
  .attr('width', 18)
  .attr('height', function(d){
    return d.rating * 50;
  })
