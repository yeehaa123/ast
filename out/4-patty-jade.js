var data = [];
d3.json("https://vivid-fire-6976.firebaseio.com/.json", function(error, json) {
  data = json;
  update();
});

function update() {
 
  var width = 1000,
      height = 350;

  // define bar chart

      var tree = d3.layout.tree().size([width, height/2]);
      var nodes = tree.nodes(data);
      var links = tree.links(nodes);

      var svg = d3.select(".patjad").append("svg")
          .attr("width", width)
          .attr("height", height)
          .append("g")
          .attr("transform", "translate(20,20)");

  //define nodes

      var nodeSelection = svg.selectAll(".node").data(nodes, function(d) {
          return d.name;
      });

      var groupNodes = nodeSelection.enter().append("g")
          .attr("transform", function(d) {
              return "translate(" + d.x + ", " + d.y + ")";
          })
          .attr("class", function(d) {
              return d.phases ? "phases" : "node";
          });

      groupNodes.append("circle")
          .attr("r", 15)
          .attr("fill", "#CC9999")
          .attr("stroke", "#CC3333")
          .attr("stroke-width", 15);

      groupNodes.append("text")
          .text(function(d) { return d.name; })
          .attr("text-anchor", "left")
          .attr("transform", "translate(10, 5)");

      nodeSelection.exit()
          .remove();

      var linkSelection = svg.selectAll("path.link")
          .data(links, function(d) {
              return d.source.name + "-" + d.target.name;
          })
          .enter()
          .append("path")
          .attr("class", "link")
          .attr("d", d3.svg.diagonal());

      var phaseSelection = nodeSelection.filter(function(d) { return d.phases; }).selectAll("g.phases")
          .data(function(d) { return d.phases; }, function(d) { return d.name; });

      var phaseNodes = phaseSelection.enter().append("g")
          .attr("class", "phase")
          .attr("transform", function(d, i) {
              return "translate(" + ((i*120)-120) + ", 30)";
          });

  // attach image to phasenodes


  phaseNodes.append("svg:image")
              .attr('x',-9)
              .attr('y',-12)
              .attr('width', 100)
              .attr('height', 150)
              .attr("xlink:href", function(d) { return d.imagen });
};
