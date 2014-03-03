// This Force Graph shows the interaction between two places, the Convent and the town of Ruby and the people living in both places, as described in Toni Morrison's novel Paradise 

var width = 490;
var height = 500;

var color = d3.scale.category20(); 

var dataset = {
        nodes: [
                {name: "The Convent", group: "1"},
                {name: "Town: Ruby", group: "1"},
                {name: "Connie", group: "2"},
                {name: "Mavis", group: "2"},
                {name: "Gigi", group: "2"},
                {name: "Seneca", group: "2"},
                {name: "Pallas", group: "2"},
                {name: "Deek Morgan", group: "3"},
                {name: "Steward Morgan", group: "3"},
                {name: "Soane Morgan", group: "3"},
                {name: "Dovey Morgan", group: "3"},
                {name: "K.D Morgan", group: "3"},
                {name: "Ruby Morgan", group: "3"},
                {name: "Roger Best", group: "4"},
                {name: "Patricia Best", group: "4"},
                {name: "Billie Delia Cato", group: "4"},
                {name: "Arnold Fleetwood", group: "4"},
                {name: "Mable Fleetwood", group: "4"},
                {name: "Jefferson Fleetwood", group:"4"},
                {name: "Sweetie Fleetwood", group: "4"},
                {name: "Arnette Fleetwood", group: "4"},
                {name: "Richard Misner", group: "6"},
                {name: "Anna Flood", group: "7"},
                {name: "Lone Dupress", group: "8"},
        ],
        edges: [
                {source: 0, target: 2},
                {source: 0, target: 3},
                {source: 0, target: 4},
                {source: 0, target: 5},
                {source: 0, target: 6},
                {source: 1, target: 7},
                {source: 1, target: 8},
                {source: 1, target: 9},
                {source: 1, target: 10},
                {source: 1, target: 11},
                {source: 1, target: 12},
                {source: 1, target: 13},
                {source: 1, target: 14},
                {source: 1, target: 15},
                {source: 1, target: 16},
                {source: 1, target: 17},
                {source: 1, target: 18},
                {source: 1, target: 19},
                {source: 1, target: 20},
                {source: 1, target: 21},
                {source: 1, target: 22},
                {source: 1, target: 23},
                {source: 0, target: 15},
                {source: 4, target: 11},
                {source: 2, target: 23},
                {source: 11, target: 20},
                {source: 0, target: 20},
                {source: 21, target: 22},
                {source: 2, target: 7},
        ]
};

var svg = d3.select(".juul")
            .append("svg")
            .attr("width",width)
            .attr("height",height)

var force = d3.layout.force()
                     .nodes(dataset.nodes)
                     .links(dataset.edges)
                     .size([width, height])
                     .linkDistance([75])
                     .charge([-400]) 
                     .start();
                     
var edges = svg.selectAll("line")
        .data(dataset.edges)
        .enter()
        .append("line")
        .style("stroke", "#2185c5")
        .style("stroke-width", "1")
      
        
var nodes = svg.selectAll(".node")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        
// don't know why the following function isn't working. I want the radius of group 1 (the two places, the Convent and Ruby), set to 30 instead of 10.

        .attr("r", function() { if(dataset.group==1){ return r=30} else {return r=10}} )
        
// every family has its own color

        .style("fill", function(d) {
                return color(d.group);
        })
        .call(force.drag);
        
nodes.append("title")
    .text(function(d) { return d.name; });
        
force.on("tick", function() {

edges.attr("x1", function(d) { return d.source.x; })
     .attr("y1", function(d) { return d.source.y; })
     .attr("x2", function(d) { return d.target.x; })
     .attr("y2", function(d) { return d.target.y; });

nodes.attr("cx", function(d) { return d.x; })
     .attr("cy", function(d) { return d.y; });

});
