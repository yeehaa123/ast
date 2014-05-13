/*

When I started this course I was excited to learn a new connection
between the humanities and coding. While I always have been relatively
comfortable with computers in general I had close to zero coding
experience (except for some old social network services). When the
course started I noticed quite early on that this would be a nice but
fast paced experience and I had to try to keep up.

My personal coding experience started off nicely with some of the
basic provided tutorials, those really helped to jumpstart my coding
understanding When trying to learn how to code my process was and
is not a easy one, through the assignments I encountered a lot of
frustration when certain things did not work the way I wanted (or at
all). When encountering difficulties I used Google a lot, searching
really helped out to find great examples and learning from those. One
time I even used a site called stackoverflow, where people post their
(coding) questions and more experienced people can try to help you
solve your problem Working together also proved to be a very useful
way to accomplish our goals and finish the assignments.

The readings that are provided are mostly readable, and it really helps
I read most of them during my Bachelor. However when looking from a
coding perspective as is done in the class, the same readings are
capable of transforming my previous perception slightly and to see the
connections between the texts and the coding work. The coding itself
continues to be a challenge every week since the pace is quite high.
But when looking back at my own beginning I realize that my coding
understanding and abilities have increased quite a bit. However, it is
still difficult at times and I am nowhere near ‘fluent’ in the new
coding languages. As said every week remains a new challenge, but my
understanding of coding and how it works and operates in general has
increased enormously.

What I would like from the second half of the course: In the second half
of the course I would like to become a little bit better at the basics
and to learn new coding styles. Perhaps with some more tutorials or
personal feedback it may become a lot easier to find personal mistakes
or imperfections. Furthermore, I think the connection to the text and
the humanities should remain solid. The connection between the two
(seemingly) different genre’s is exactly what makes things interesting
and what (to my personal understanding) is crucial to advance into the
‘future’; combining both humanitarian perspectives and the ‘new’
coding styles and insights.

*/

// Overall
// --------
// Good to read, you are right. It is a difficult balance to maintain though.
// Especially since most of you already know a lot about theory and very little
// about programming. Connecting the two is indeed the most interesting part,
// but a really dialogue can only take place if the levels get a bit more 
// equalized.
//
// In fact, I see the same problem in your portfolio. You are making a lot of 
// progress with the coding, you seem to have mastered the basic concepts and
// already starting on some more advanced ones. However, there is still little 
// interaction with your own research. Try to focus on that in the second 
// portfolio.


A1
-----------------------------------------------------------------------------------------------------------------------------
$('h1').css({'background-color': '#239', 'border-color': '2px solid #967'});
 
$('body').css({'background-color': '#539', 'border-color': '2px solid #967'});
 
$(".deadlines").text("No Deadlines for this course"). css({'background-color': '#666', 'border-color': '2px solid #967'});
 
$('section.prerequisites').text('Prerequisites; You need to be able to have a great memory for remembering all of the commands. Such a shame I can not remember how to make a title in Jquery, else this would have been a much nicer looking piece.').css({'background-color': '#784', 'border-color': '2px solid #967'});
 
$('h1').css({'color': 'red'});
 
$('body').css({'font-size': '12px'});
 
$('body').css({'font-family': 'helvetica'});

A2
-----------------------------------------------------------------------------------------------------------------------------
var studentsTemplate ='<script id="students-template" type="text/x-handlebars-template"><table><thead><th>Student Name</th><th>Gender</th><th>Email</th><th>Favoritecolor</th><th>Pet</th></thead><tbody>{{#students}}<tr><td>{{name}}</td><td>{{Gender}}</td><td>{{email}}</td><td>{{favoritecolor}}</td><td>{{Pet}}</td></tr>{{/students}}</tbody></table></script>';
 
$(".content").append(studentsTemplate);
 
var studentTemplateScript = $("#students-template").html();
 
var theStudentTemplate = Handlebars.compile(studentTemplateScript);
 
var data = { students: [
      {name: "Sander", Gender: "Male", email: "sander@email.com", favoritecolor: "Red", Pet: "Giraffe"},
      {name: "Sophia", Gender: "Female", email: "sophia@email.com", favoritecolor: "Green", Pet: "Chameleon"},
      {name: "Steph", Gender: "Female", email: "steph@email.com", favoritecolor: "Blue", Pet: "Raccoon"},
      {name: "Serkan", Gender: "Male", email: "serkan@email.com", favoritecolor: "Blue", Pet: "Cat"},
      ]};
 
$(".info").append(theStudentTemplate(data));
 
 
 
 
var assignmentsTemplate ='<script id="assignments-template" type="text/x-handlebars-template"><table><thead><th>Week</th><th>Readings</th><th>Assignments</th><th>Remarks</th><th>Grade</th></thead><tbody>{{#assignments}}<tr><td>{{week}}</td><td>{{read}}</td><td>{{assignment}}</td><td>{{remarks}}</td><td>{{Grade}}</td></tr>{{/assignments}}</tbody></table></script>';
 
$(".content").append(assignmentsTemplate);
 
var assignmentTemplateScript = $("#assignments-template").html();
 
var theAssignmentTemplate = Handlebars.compile(assignmentTemplateScript);
 
var datatwo = { assignments: [
      {week: "One", read: "Katz", assignment: "Adopt a cat", remarks: "Cats", Grade: "Great"},
      {week: "Two", read: "Enjoy your weekend", assignment: "Buy a new mac", remarks: "Lovely assignment", Grade: "Nice"},
      {week: "Three", read: "Jquerryyy", assignment: "Go wild", remarks: "Goodluck", Grade: "Not graded"},
      {week: "Four", read: "Ruby", assignment: "Buy ruby's", remarks: "Bring them with you", Grade: "Perfect"},
      ]};
 
$(".info").append(theAssignmentTemplate(datatwo));

A3
-----------------------------------------------------------------------------------------------------------------------------
var data = [{"label":"aliquip (true)", "value":4}, 
            {"label":"ut eu (false)", "value":3}, 
            {"label":"aliquip ea (false)", "value":3},
            {"label":"irure (false)", "value":2},
            {"label":"ad (false)", "value":4},
            {"label":"duis nostrud (true)", "value":2},
            {"label":"lorem (true)", "value":2},
];
 
    
    var data_max = 4,
 
    
    num_ticks = 6,
 
   
    left_margin = 120,
    right_margin = 120,
    top_margin = 30,
    bottom_margin = 0;
 
 
    var w = 500,                        
        h = 500,                        
        color = function(id) { return '#00b3dc' };
 
    var x = d3.scale.linear()
        .domain([0, data_max])
        .range([0, w - ( left_margin + right_margin ) ]),
        y = d3.scale.ordinal()
        .domain(d3.range(data.length))
        .rangeBands([bottom_margin, h - top_margin], .5);
 
 
    var chart_top = h - y.rangeBand()/2 - top_margin;
    var chart_bottom = bottom_margin + y.rangeBand()/2;
    var chart_left = left_margin;
    var chart_right = w - right_margin;
 
    var vis = d3.select("body")
        .append("svg:svg")
            .attr("width", w)
            .attr("height", h)
        .append("svg:g")
            .attr("id", "barchart")
            .attr("class", "barchart")
 
    var rules = vis.selectAll("g.rule")
        .data(x.ticks(num_ticks))
    .enter()
        .append("svg:g")
        .attr("transform", function(d)
                {
                return "translate(" + (chart_left + x(d)) + ")";});
    rules.append("svg:line")
        .attr("class", "tick")
        .attr("y1", chart_top)
        .attr("y2", chart_top + 4)
        .attr("stroke", "black");
 
    rules.append("svg:text")
        .attr("class", "tick_label")
        .attr("text-anchor", "middle")
        .attr("y", chart_top)
        .text(function(d)
        {
        return d;
        });
    var bbox = vis.selectAll(".tick_label").node().getBBox();
    vis.selectAll(".tick_label")
    .attr("transform", function(d)
            {
            return "translate(0," + (bbox.height) + ")";
            });
 
    var bars = vis.selectAll("g.bar")
        .data(data)
    .enter()
        .append("svg:g")
            .attr("class", "bar")
            .attr("transform", function(d, i) { 
                    return "translate(0, " + y(i) + ")"; });
 
    bars.append("svg:rect")
        .attr("x", right_margin)
        .attr("width", function(d) {
                return (x(d.value));
                })
        .attr("height", y.rangeBand())
        .attr("fill", color(0))
        .attr("stroke", color(0));
 
    var labels = vis.selectAll("g.bar")
        .append("svg:text")
            .attr("class", "label")
            .attr("x", 0)
            .attr("text-anchor", "right")
            .text(function(d) {
                    return d.label;
                    });
 
    var bbox = labels.node().getBBox();
    vis.selectAll(".label")
        .attr("transform", function(d) {
                return "translate(0, " + (y.rangeBand()/2 + bbox.height/4) + ")";
                });
 
    vis.append("svg:line")
        .attr("class", "axes")
        .attr("x1", chart_left)
        .attr("x2", chart_left)
        .attr("y1", chart_bottom)
        .attr("y2", chart_top)
        .attr("stroke", "black");
     vis.append("svg:line")
        .attr("class", "axes")
        .attr("x1", chart_left)
        .attr("x2", chart_right)
        .attr("y1", chart_top)
        .attr("y2", chart_top)
        .attr("stroke", "black");

A4
----------------------------------------------------------------------------------------------------------------------------
var chartTitle = '<h2>Average Winter Temperature</h2>'
$('.main').append(chartTitle)
 
d3.json( 'https://data4.firebaseio.com/.json', 
  function (data4){;
 
var margin = { top: 20, right: 20, bottom: 20, left: 40 };
var w = 800 - margin.left - margin.right; 
var h = 500  - margin.top - margin.bottom;
var chartHeight = 400;
var barPadding = 5
 
var Temperature = function(d) { return d.Temperature };
var year = function (d) {return d.Year};
 
//add svg area
 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
 
 
//generate scales and axis
            
var xScale = d3.scale.ordinal()
  .domain(d3.range(data4.length))
  .rangeRoundBands([0, w], 0.2);
 
  var yScale = d3.scale.linear()
  .domain([0, d3.max(data4, function(d) { return d.Temperature; })])
  .range([chartHeight, 0])
 
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5);
 
//group  chart elements
 
var barChart = svg.selectAll('g')
    .data(data4)
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
 
//ad chart bars
 
    barChart.append('rect')
    .attr('x', 0)
    .attr('y', function(d) {
      return yScale(d.Temperature);
    })
    .attr('width', xScale.rangeBand()) 
    .attr('height', function(d){
      return chartHeight - yScale(d.Temperature);
    })
  .attr("fill", function(d) {
    return "rgb(165, 242, 243" + (d.Temperature) + ")";})
    .style('stroke-width', '4px')
  
//add bar data labels
            
barChart.append("text")
    .text(Temperature)
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", function(d) { return yScale(d.Temperature) + 0; })
    .attr("font-family", "calibri")
    .attr("font-size", "14px")
    .attr("fill", function(d) {
    return "rgb(64, 10, 100" + (d.Temperature * 10) + ")";})
 
//add bar names
 
  barChart.append("text")
    .text(year)
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", chartHeight + 10)
    .attr("font-family", "calibri")
    .attr("font-size", "14px", "bold")
    
    .style("writing-mode", "tb");
 
//add yAxis
  
  svg.append("g")
    .attr("class", "axis")
    .call(yAxis)
    .attr("fill", "black")
    .attr("font-family", "calibri")
    .attr("font-size", "16px")
 
    
  
    
    });

A5
----------------------------------------------------------------------------------------------------------------------------
var chartTitle = '<h2>Average Winter Temperature</h2>'
$('.main').append(chartTitle)
 
d3.json( 'https://data4.firebaseio.com/.json', 
  function (data4){;
$('head').append("<script src='https://cdn.firebase.com/v0/firebase.js'></script>")
      
 
var inputForm = "<form><input type='text' id='nameInput' placeholder='Year'><input type='number' id='temperatureInput' placeholder='Temperature'><label for='temperatureInput'>Choose temperature and hit [ENTER]</label><button type='submit' class='submit'>Submit</button></form>"
 
$('.main').append(inputForm)
 
    var firebaseData = new Firebase("https://data4.firebaseio.com/");
 
    function funct1(evt)
    {
     var yearName = $('#yearInput').val();
          var temperatureCount = $('#temperatureInput').val();
          
    firebaseData.push().set({year: year, temperature: temperatureCount});
     evt.preventDefault();
    } 
var margin = { top: 20, right: 20, bottom: 20, left: 40 };
var w = 800 - margin.left - margin.right; 
var h = 500  - margin.top - margin.bottom;
var chartHeight = 400;
var barPadding = 5
 
var Temperature = function(d) { return d.Temperature };
var year = function (d) {return d.Year};
 
//add svg area
 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
 
 
//generate scales and axis
            
var xScale = d3.scale.ordinal()
  .domain(d3.range(data4.length))
  .rangeRoundBands([0, w], 0.2);
 
  var yScale = d3.scale.linear()
  .domain([0, d3.max(data4, function(d) { return d.Temperature; })])
  .range([chartHeight, 0])
 
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5);
 
//group  chart elements
 
var barChart = svg.selectAll('g')
    .data(data4)
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
 
//ad chart bars
 
    barChart.append('rect')
    .attr('x', 0)
    .attr('y', function(d) {
      return yScale(d.Temperature);
    })
    .attr('width', xScale.rangeBand()) 
    .attr('height', function(d){
      return chartHeight - yScale(d.Temperature);
    })
  .attr("fill", function(d) {
    return "rgb(165, 242, 243" + (d.Temperature) + ")";})
    .style('stroke-width', '4px')
  
//add bar data labels
            
barChart.append("text")
    .text(Temperature)
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", function(d) { return yScale(d.Temperature) + 0; })
    .attr("font-family", "calibri")
    .attr("font-size", "14px")
    .attr("fill", function(d) {
    return "rgb(64, 10, 100" + (d.Temperature * 10) + ")";})
 
//add bar names
 
  barChart.append("text")
    .text(year)
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", chartHeight + 10)
    .attr("font-family", "calibri")
    .attr("font-size", "14px", "bold")
    
    .style("writing-mode", "tb");
 
//add yAxis
  
  svg.append("g")
    .attr("class", "axis")
    .call(yAxis)
    .attr("fill", "black")
    .attr("font-family", "calibri")
    .attr("font-size", "16px")
 
    
  
    
    });

----------------------------------------------------------------------------------------------------------------------------
