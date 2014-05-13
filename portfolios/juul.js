// TEXT
//
// Separation of Concerns 
// ----------------------
// Although it does show a strong understanding of jQuery, this is the wrong 
// approach to making webpages. Think back to what I've said about [separation
// of concerns]() - JavaScript for behavior, CSS for Styling, HTML for content.
// Here you are using JavaScript for all three of them.

var portfolio = '<h2>PORTFOLIO - Art, Science and Technology</h2>'

var quote ='<p>"But anyone who has ever had to construct, repair, program, or otherwise operate on a computational apparatus knows that a strange and unique world does stir within such a device" (Bogost 2).</p>'

var paragraphOne = '<p>This quote out of Ian Bogost text “Alien Phenemonolgy” accurately describes my experience during the first block of this semester of the course AST. It is really an interesting (and most of the times frustrating) experience for me to learn another language in which you have to be so precise; every tiny detail can make a difference, but can also cause strange errors. I have the feeling that I only have had a glimpse of this strange and unique world inside a computer. To understand a tiny little bit of this world seems to be relevant and important for reflecting on and analysing new developments in technology from a humanities perspective.</p>'

var paragraphTwo = '<p>Ian Bogost engages in a similar kind of project, but from a different perspective: he does not want to describe a computer from the perspective of the human, he really wants to dive into the world of the computer, and more generally into the world of things. To remove the human from its central position in the world,  he poses the question: “What’s it like to be a computer, or a microprocessor, or a ribbon cable? What is it like to be a thing?” (5). Only a small part of the process taken place in a computer entails human experience and perception. However, for a computer to operate at all for us, it first requires a lot of interactions taken place for itself. As computer programmers we can only describe what kind of processes are taken place, but we can never experience it. </p>'

var paragraphThree = '<p>The idea that computers and all other things have a world on their own, a world that will always be alien to us as humans,  is valuable and important, but also problematic in my field of studies, Cultural Analysis.  How can we ever analyse an object, when it is alien to us, how can we ever do anything else than literally describing the object? Bogost does not really formulate, or show an alternative to the current practice of cultural analysis, which he criticizes. What perhaps could be a solution is to incorporate programming skills into research projects, although programming is a human ‘quality’. However, I find it really difficult to think of interesting ways in which I could use programming for my own interests. What I normally do in my papers is analysing an object, and bringing it in contact with a concept and look at how the interaction between object and concept could change the way we look at both of them.</p>'

var paragraphFour = '<p>Up until now in this course, we used our programming skills to visualize data. I, for example, visualized the ‘relations’ between the characters in Paradise, a novel by Toni Morrison into a force graph (see below).This kind of data visualization reminded me of a text that I have read for another course last semester, “Conjectures of World Literature” by Franco Moretti. In this text he describes the practice of  distant reading in opposition to that of close reading. Moretti prefers distant reading, because he thinks that focusing so much energy on one object, as close reading suggests, is a waste of time, as he writes: “you invest so much in individual texts only if you think that very few of them really matter” (Moretti 57). He defines distant reading as follows: “Distant reading: where distance, let me repeat it, is a condition of knowledge: it allows you to focus on units that are much smaller or much larger than the text: devices, themes, tropes—or genres and systems" (57). Moretti brings quantitative methods from the social sciences into the humanities.</p>'

var paragraphFive = '<p>What I could do, then, in my own research is for example visualise the relationships in all the novels of Toni Morrison and see if I could find a pattern. However, this form of analysis, this form of distant reading, does not sound interesting or satisfying to me. Apart from the fact that the data in this example is not so big - it will take less time to draw the graph on paper - , what does a visualisation of the relations in a novel add to the understanding or analysis of this novel? I am looking for ways to use programming that can be more than just visualisation, that bring to light new perspectives on the object, instead of just making the object more clear and visible.</p>'

var paragraphSix = '<p>I am currently working on a paper about two artworks by Christiaan Zwanikken that were part of the exhibition Nature Rewired in het Valkhof Museum in Nijmegen. In his artworks, Christiaan Zwanikken uses material of animals (feathers, skulls etc.) together with technology to create kinetic sculptures. In this paper I am using the concept of evolution to look at those artworks and, inspired by them, I am trying to formulate a ‘new’ definition of evolution. Because of the fact that the artworks are programmed, I think it could be interesting to look at how I could use my programming skills to analyse them, to confront the works in the language in which they operate themselves. The question that remains is the following: how can I use programming in qualitative research/ how can I use programming in close reading? This is the direction that I want to go into in the next block.</p>'

var reference= '<h3>References</h3>'
var referenceOne = '<p>Bogost, Ian. “Alien Phenomenology”. Alien Phenomenology, or What It’s Like to Be a Thing. Minneapolis: University of Minnesota Press, 2012.</p>'
var referenceTwo = '<p>Moretti, Franco. “Conjectures on World Literature”. New Left Review 1 (2000): 54-68.</p>'
var assignmentOne = '<h3><a href="https://gist.github.com/juulwillems/8955603" target="_newtab">Click here to open Assignment 1 </a></h3>'
var assignmentTwo = '<h3 id="assignmentTwo"><a>Click here to see Assignment 2 </a></h3>'
var assignmentThree = '<h3 id="assignmentThree"><a>Click here to see Assignment 3</a></h3>'
var assignmentFour = '<h3 id="assignmentFour"><a>Click here to see Assignment 4</a></h3>'
var assignmentFive = '<h3 id="assignmentFive"><a>Click here to see Assignment 5</a></h3>'

$('.content').append(portfolio);
$('.content').append(quote);
$('.content').append(paragraphOne);
$('.content').append(paragraphTwo);
$('.content').append(paragraphThree);
$('.content').append(paragraphFour);
$('.content').append(paragraphFive);
$('.content').append(paragraphSix);
$('.content').append(reference);
$('.content').append(referenceOne);
$('.content').append(referenceTwo);
$('.content').append(assignmentOne);
$('.content').append(assignmentTwo);
$('.content').append(assignmentThree);
$('.content').append(assignmentFour);
$('.content').append(assignmentFive);


// ASSIGNMENT 2


$("#assignmentTwo").one("click", function () {


var studentsTemplate ='<script id="students-template" type="text/x-handlebars-template"><table><thead><th>Name</th><th>Studentnumber</th><th>Email</th><th>Studyprogramme</th></thead><tbody>{{#students}}<tr><td>{{name}}</td><td>{{studentnumber}}</td><td>{{emailadress}}</td><td>{{studyprogramme}}</td></tr>{{/students}}</tbody></table></script>';
$("body").append(studentsTemplate);
 
var AssignmentsTemplate = '<script id="assignments-template" type="text/x-handlebars-template"><table><thead><th>Assignment</th><th>Name</th><th>Link</th></thead><tbody>{{#StudentAssignments}}<tr><td>{{assignment}}</td><td>{{name}}</td><td>{{link}}</td></tr>{{/StudentAssignments}}</tbody></table></script>';
$("body").append(AssignmentsTemplate);
 
// data
 
var students =  { students: [
{"name": "Juul Willems","studentnumber": "6365787","emailadress": "juulwillems92@gmail.com","studyprogramme": "rMA Cultural Analysis"},
{"name": "Jan de Boer","studentnumber": "14820337","emailadress": "jan.deboer@gmail.nl","studyprogramme": "rMA New Media"},
{"name": "Henri de Klein","studentnumber": "14022337","emailadress": "henri.deklein@gmail.nl","studyprogramme": "rMA New Media"},
{"name": "Rosa de Vries","studentnumber": "13452389","emailadress": "rosa.devries@gmail.nl","studyprogramme": "rMA Artistic Research"}
]};
 
var studentAssignments = { assignments: [
{"assignment": "1","name": "Juul Willems","link": "https://gist.github.com/8955603.git"},
{"assignment": "2", "name": "Juul Willems", "link": ""}
]};
 
var studentTemplateScript = $("#students-template").html();
var AssignmentsTemplateScript = $("#assignments-template").html();
 
var theStudentTemplate = Handlebars.compile(studentTemplateScript);
var theAssignmentsTemplate = Handlebars.compile(AssignmentsTemplateScript);
 
 
$(".content").append(theStudentTemplate (students));
 
$(".content").append(theAssignmentsTemplate (studentAssignments));

}); 




// ASSIGNMENT 3


$("#assignmentThree").one("click", function () {

var width = 500
var height = 500
var padding = 50
 
var data = JSON.parse(localStorage.assignment);    
 
 
 
xMax = d3.max(data.events, function(d) { return d.rating;}); 
yMax = data.events.length; 
 
 
var xScale = d3.scale.linear()
    .domain([0, xMax])
    .range([padding, width-padding]);
var yScale = d3.scale.ordinal()
    .domain(d3.range(yMax))
    .rangeRoundBands([height-padding, padding], 0.1);
    
 
var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .ticks(xMax)
 
 
 
var svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height);
            
svg.selectAll("rect")
   .data(data.events)
   .enter()
   .append("rect")
   .attr("x", function(d) {
			   		return xScale(0);
			   })
   .attr("y", function(d,i) {
			   		return yScale(i);
			   })
   .attr("height", yScale.rangeBand())
   .attr("width", function(d) {
                 return xScale(d.rating)-padding;})
   .style("fill", function (d) {
            if (d.ficticious==0) {return "#F29E00"}
            else {return "#0016CB"} ;});
   
svg.selectAll("text")
   .data(data.events)
   .enter()
   .append("text")
   .text(function(d) {
        return d.name;
   })
   .attr("y", function(d, i) {
                 return yScale(i) + yScale.rangeBand() / 2;})
   .attr("x", function(d) {
            return xScale(0)+20;})
   .style({ 'stroke': 'White', 'fill': 'white', 'stroke-width': '0,2px'})
 
svg.append("g")
    .attr("transform", "translate(0," + (height - padding) + ")")
    .style({ 'stroke': 'red', 'fill': 'none', 'stroke-width': '2px'})
    .call(xAxis);
    
    
});




// ASSIGNMENT 4


$("#assignmentFour").one("click", function () {

// This Force Graph shows the interaction between two places, the Convent and the town of Ruby and the people living in both places, as described in Toni Morrison's novel Paradise 
 
d3.json("https://paradise.firebaseio.com/.json", 
function (paradise){;


	
//var dataset = [ ];
 
 //d3.json("https://paradise.firebaseio.com/.json", function (d) {

     //return dataset = d.dataset 
  //}); 
  
var width = 500
var height = 500
 
var color = d3.scale.category20(); 
 
var svg = d3.select("body")
            .append("svg")
            .attr("width",width)
            .attr("height",height)
 
var force = d3.layout.force()
                     .nodes(paradise.nodes)
                     .links(paradise.edges)
                     .size([width, height])
                     .linkDistance([75])
                     .charge([-400]) 
                     .start();
                     
var edges = svg.selectAll("line")
        .data(paradise.edges)
        .enter()
        .append("line")
        .style("stroke", "#2185c5")
        .style("stroke-width", "1")
      
        
var nodes = svg.selectAll(".node")
        .data(paradise.nodes)
        .enter()
        .append("circle")
        .attr("class", "node")
        
// don't know why the following function isn't working. I want the radius of group 1 (the two places, the Convent and Ruby), set to 30 instead of 10.

// Passing in Data
// ---------------
// I believe that you need a so-called 'key-function' when you pass in your 
// data. Look it up, and tell me if that worked.
 
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

});
});




// ASSIGNMENT 5


$("#assignmentFive").one("click", function () {

// define dataset
 
var dataset = {
        nodes: [
                {name: "The Convent: 0", group: "1"},
                {name: "Town: Ruby: 1", group: "1"},
                {name: "Connie: 2", group: "2"},
                {name: "Mavis: 3", group: "2"},
                {name: "Gigi: 4", group: "2"},
                {name: "Seneca: 5", group: "2"},
                {name: "Pallas: 6", group: "2"},
                {name: "Deek Morgan: 7", group: "3"},
                {name: "Steward Morgan: 8", group: "3"},
                {name: "Soane Morgan: 9", group: "3"},
                {name: "Dovey Morgan: 10", group: "3"},
                {name: "K.D Morgan: 11", group: "3"},
                {name: "Ruby Morgan: 12", group: "3"},
                {name: "Roger Best: 13", group: "4"},
                {name: "Patricia Best: 14", group: "4"},
                {name: "Billie Delia Cato: 15", group: "4"},
                {name: "Arnold Fleetwood: 16", group: "4"},
                {name: "Mable Fleetwood: 17", group: "4"},
                {name: "Jefferson Fleetwood: 18", group:"4"},
                {name: "Sweetie Fleetwood: 19", group: "4"},
                {name: "Arnette Fleetwood:20", group: "4"},
                {name: "Richard Misner: 21", group: "6"},
                {name: "Anna Flood: 22", group: "7"},
                {name: "Lone Dupress: 23", group: "8"},
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
 
// create new Firebase
 
var firebase = new Firebase ("https://paradise.firebaseio.com/")
 
// add dataset to Firebase
 
firebase.set({"data":dataset})
 
 
var width = 500
var height = 500
 
var color = d3.scale.category20(); 
 
var svg = d3.select("body")
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
 
 
 
// create HTML form
 
var form ='<form name="relation" id="relation"><div><label for="source">Source</label><select name="source" id="sourceInput"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select></div><div><label for="target">Target</label><select name="target" id="targetInput"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>1</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option></select></div></form><a><p id="submit">     Submit</p></a></div></form>'

// append form to body

// Dynamic Forms
// -------------
// This is very hard to read and it must have been even harder to write. See
// my comment on separation of concerns. A handlebars template would have 
// worked here very well as well.
 
$('body').append(form);
 
d3.select("#submit")
	.on("click", function() {
	var sourceInput = $('#sourceInput :selected').val();
        var targetInput = $('#targetInput :selected').val();
        var newPushRef = firebase.push();
        firebase.set("edges"[{source: sourceInput, target: targetInput}]);
	});

	
});

// Setting Data
// ------------
// For me, the setting of the data does not work. Does it work for you?

// Overall
// -------
// This is a really strong portfolio. I am very impressed, by the programming
// but also by the fact that you already manage to relate that to your ongoing
// research. The ideas about the Zwanniken artworks that you describe sound 
// very interesting, and I am very curious to see where that'll lead to.
