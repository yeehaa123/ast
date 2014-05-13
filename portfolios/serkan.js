//assignment 1
//------------

var assignment1Header = "<h1 id=assignment1>Assignment 1</h1>"

$('.main').append(assignment1Header)

var assignment1Initial = "<br></br><p>-Click <a href='https://gist.github.com/SerkOw/9766172'>here</a> for the Gist link to the initial assignment 1.</p>"

$('.main').append(assignment1Initial)


var assignment1Button = "<br></br><button type='button'>Click here to see the improved version</button>"
$(".main").find("#assignment1").append(assignment1Button);
 
$('.main').on("click", "button", function() { 
var assignment1Final = ("<p>-Click <a href='https://gist.github.com/SerkOw/8944921'>here</a> for the Gist link to the improved assignment 1 </p>"); 
$(this).after(assignment1Final);
$(this).remove();
 
});


//assignment 2
//------------

var assignment2Header = "<h1>Assignment 2</h1>"

$('.main').append(assignment2Header)

//students table
var studentsTemplate ='<script id="students-template" type="text/x-handlebars-template"><table><thead><th>Student Name</th><th>Special Skill</th><th>Email</th></thead><tbody>{{#students}}<tr><td>{{name}}</td><td>{{specialskill}}</td><td>{{email}}</td></tr>{{/students}}</tbody></table></script>';

$(".main").append(studentsTemplate);

var studentTemplateScript = $("#students-template").html();

var theStudentTemplate = Handlebars.compile(studentTemplateScript);

var data = { students: [
      {name: "Goku", specialskill: "Spirit Bomb", email: "goku@saiyan.com" },
      {name: "Gohan", specialskill: "Masenko", email: "gohan@saiyan.com" },
      {name: "Vegeta", specialskill: "Great Ape", email: "vegeta@saiyan.com"}
      ]};

$(".main").append(theStudentTemplate(data));

//assignments table
var assignmentsTemplate ='<script id="assignments-template" type="text/x-handlebars-template"><table><thead><th>Week</th><th>Readings</th><th>Assignments</th></thead><tbody>{{#assignments}}<tr><td>{{week}}</td><td>{{read}}</td><td>{{assignment}}</td></tr>{{/assignments}}</tbody></table></script>';
 
$(".content").append(assignmentsTemplate);
 
var assignmentTemplateScript = $("#assignments-template").html();
 
var theAssignmentTemplate = Handlebars.compile(assignmentTemplateScript);
 
var datatwo = { assignments: [
      {week: "One", read: "About Bears and Katz", assignment: "Eat, Pray, Code" },
      {week: "Two", read: "Something about Data Storage and Javascript", assignment: "Eat More, Pray More, Code More" },
      ]};
 
$(".main").append(theAssignmentTemplate(datatwo));



//improvement (added a new column with 'levels' to the students table)

$(".main").append("<p>The 'improved' students table can be observed below:</p>");


var studentsTemplate2 ='<script id="students-template2" type="text/x-handlebars-template"><table><thead><th>Student Name</th><th>Special Skill</th><th>Email</th><th>Level</th></thead><tbody>{{#students2}}<tr><td>{{name}}</td><td>{{specialskill}}</td><td>{{email}}</td><td>{{level}}</td></tr>{{/students2}}</tbody></table></script>';

$(".content").append(studentsTemplate2);

var studentTemplateScript2 = $("#students-template2").html();

var theStudentTemplate2 = Handlebars.compile(studentTemplateScript2);

var data2 = { students2: [
      {name: "Goku", specialskill: "Spirit Bomb", email: "goku@saiyan.com", level: "Over 9000" },
      {name: "Gohan", specialskill: "Masenko", email: "gohan@saiyan.com", level: "Over 7000" },
      {name: "Vegeta", specialskill: "Great Ape", email: "vegeta@saiyan.com", level: "Over 8000"}
      ]};

$(".main").append(theStudentTemplate2(data2));



//assignment 3
//------------

var assignment3Header = "<h1>Assignment 3: Initial bar chart and improved version (below)</h1>"

$('.main').append(assignment3Header)

var chartTitle = '<h2>Events and ratings</h2>'
$('.main').append(chartTitle)
 
var events = [
{"name":"veniam ","rating":2,"ficticious":false},
{"name":"consequat ","rating":2,"ficticious":true},
{"name":"Excepteur reprehenderit ","rating":1,"ficticious":true},
{"name":"ea ","rating":2,"ficticious":false},
{"name":"sed ","rating":2,"ficticious":true},
{"name":"sunt Ut ","rating":3,"ficticious":true},
{"name":"magna adipisicing ","rating":3,"ficticious":true},
{"name":"amet ","rating":4,"ficticious":true},
{"name":"id et ","rating":5,"ficticious":false},
{"name":"ut ","rating":1,"ficticious":false},
{"name":"est veniam ","rating":5,"ficticious":true},
{"name":"enim magna ","rating":4,"ficticious":false},
{"name":"nostrud ","rating":5,"ficticious":false},
{"name":"non voluptate ","rating":1,"ficticious":true},
{"name":"laborum ","rating":2,"ficticious":false},
{"name":"incididunt ","rating":1,"ficticious":true},
{"name":"deserunt ","rating":5,"ficticious":false},
{"name":"eu ","rating":4,"ficticious":false},
{"name":"consectetur ","rating":2,"ficticious":false},
{"name":"magna id ","rating":3,"ficticious":true}
]
    
 
 
var w = 800;
var h = 100;
var barPadding = 1
var ratings = function(d) { return d.rating * 10};
var rating = function(d) { return d.rating};
var names = function (d) {return d.name};
 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
 
svg.selectAll("rect")
   .data(events)
   .enter()
   .append("rect")
 .attr("x", function(d, i) {return i * (w / events.length);})
.attr("y", function(d) {return h - (d.rating * 10);})
.attr("width", 20)
.attr("height", ratings)
.attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})
.on("mouseover", function() {
        d3.select(this)
          .attr("fill", "orange");})
.on("mouseout", function() {
        d3.select(this)
          .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})})
 
 
svg.selectAll("text")
   .data(events)
   .enter()
   .append("text")
.text(function(d) {return d.rating})
.attr("x", function(d, i) {
        return i * (w / events.length) + (w / events.length - barPadding) / 4;
   }).attr("y", function(d) {
        return h - (d.rating * 12);
   }).attr("text-anchor", "middle")
.attr("font-family", "calibri")
   .attr("font-size", "14px")
   .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})
 
 
var svg2 = d3.select("body")
            .append("svg")
            .attr("width", 800)
            .attr("height", 200)
 
svg2.selectAll("text")
.data(events)
.enter()
.append("text")
.text(names)
.attr("x", function(d, i) {
        return i * (w / events.length) + 9;})
.attr("text-anchor", "middle")
.attr("y", 60)
.attr("font-family", "arial")
   .attr("font-size", "10px")
   .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})
.style("writing-mode", "tb")
//.style("glyph-orientation-vertical", "1")
 
 
svg.selectAll("rect")
.filter(function (d, i) {
                    return d.ficticious == true;
                })
                .attr("stroke", 'black');



//------------
//------------


//improved d3 bar chart assignment 3:
 
var eventsJSON = localStorage.getItem('assignment');
var data = JSON.parse(eventsJSON).events;
var events = data;
 
var w = 800 
var h = 300 
var barPadding = 5
 
var ratings = function(d) { return d.rating * 30};
var rating = function(d) { return d.rating};
var names = function (d) {return d.name};
 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
 
svg.selectAll("rect")
   .data(events)
   .enter()
   .append("rect")
 .attr("x", function(d, i) {return i * (w / events.length);})
.attr("y", function(d) {return h - (d.rating * 30);})
.attr("width", (w / events.length - barPadding))
.attr("height", ratings)
.attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})
.on("mouseover", function() {
        d3.select(this)
          .attr("fill", "purple");})
.on("mouseout", function() {
        d3.select(this)
        .transition()
        .duration(250)
          .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})})
 
//svg.selectAll("rect")
.filter(function (d, i) {
                    return d.ficticious == true;
                })
                .attr("stroke", 'red');
            
svg.selectAll("rect").attr('stroke', function(d){
    if(d.ficticious){
      return 'red';
    }
    return 'black';
  })
 
svg.selectAll("text")
   .data(events)
   .enter()
   .append("text")
.text(function(d) {return d.rating})
.attr("x", function(d, i) {
        return i * (w / events.length) + (w / events.length - barPadding) / 2;
   }).attr("y", function(d) {
        return h - (d.rating * 15);
   }).attr("text-anchor", "middle")
.attr("font-family", "calibri")
   .attr("font-size", "14px")
   .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})
 
 
var svg2 = d3.select("body")
            .append("svg")
            .attr("width", 800)
            .attr("height", 200)
 
svg2.selectAll("text")
.data(events)
.enter()
.append("text")
.text(names)
.attr("x", function(d, i) {
        return i * (w / events.length) + (w / events.length - barPadding) / 2})
.attr("text-anchor", "middle")
.attr("y", 60)
.attr("font-family", "arial")
   .attr("font-size", "10px")
   .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.rating * 50) + ")";})
.style("writing-mode", "tb")
//.style("glyph-orientation-vertical", "1")

//-----------------------------------------------------
//-----------------------------------------------------

//assignment 4
//------------

var assignment4Header = "<h1>Assignment 4</h1>"

$('svg').last().after(assignment4Header)

var chartTitle = '<h2>Dutch Olympic Medals from 2000 to 2014</h2>'
$('.body').append(chartTitle)
var dataSource =  '<p>Source: https://en.wikipedia.org/wiki/Netherlands_at_the_Olympics</p>'
$('body').append(dataSource)
var legend = '<p style="color:orange;font-size:20px;"> - Summer Games</p><p style="color:darkblue;font-size:20px;"> - Winter Games</p>'
$('body').append(legend)
 
 
 d3.json( 'https://assignmentdata.firebaseio.com/.json', 
  function (assignmentdata){;
 
var margin = { top: 20, right: 20, bottom: 20, left: 40 };
var w = 800 - margin.left - margin.right; 
var h = 550  - margin.top - margin.bottom;
var chartHeight = 400;
var barPadding = 5
 
var medals = function(d) { return d.medals * 30};
var medal = function(d) { return d.medals};
var games = function (d) {return d.games};
 
//add svg area
 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
 
 
//generate scales and axis
            
var xScale = d3.scale.ordinal()
  .domain(d3.range(assignmentdata.length))
  .rangeRoundBands([0, w], 0.2);
 
  var yScale = d3.scale.linear()
  .domain([0, d3.max(assignmentdata, function(d) { return d.medals; })])
  .range([chartHeight, 0])
 
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5);
 
//group  chart elements
 
var barChart = svg.selectAll('g')
    .data(assignmentdata)
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
      return yScale(d.medals);
    })
    .attr('width', xScale.rangeBand()) 
    .attr('height', function(d){
      return chartHeight - yScale(d.medals);
    })
  .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})
.on("mouseover", function() {
        d3.select(this)
          .attr("fill", "purple");})
.on("mouseout", function() {
        d3.select(this)
        .transition()
        .duration(250)
          .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})})
.attr('stroke', function(d){
    if(d.summergames){
      return 'orange';
    }
    return 'darkblue';
  })
    .style('stroke-width', '4px')
 
//add bar data labels
            
barChart.append("text")
    .text(medal)
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", function(d) { return yScale(d.medals) + 20; })
    .attr("font-family", "calibri")
    .attr("font-size", "14px")
    .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})
 
//add bar names
 
  barChart.append("text")
    .text(games)
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", chartHeight + 10)
    .attr("font-family", "calibri")
    .attr("font-size", "14px", "bold")
    .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})
    .style("writing-mode", "tb");
 
//add yAxis
  
  svg.append("g")
    .attr("class", "axis")
    .call(yAxis)
    .attr("fill", "#black")
    //.attr("stroke", "black")
    .attr("font-family", "calibri")
    .attr("font-size", "16px")
  
    
    });


//assignment 5
//------------

var assignment5Header = "<h1>Assignment 5</h1>"

$('svg').last().after(assignment5Header)

var assignment5Initial = "<br></br><p>-Click <a href='https://gist.github.com/SerkOw/9785727'>here</a> for the Gist link to the initial assignment 5.</p>"

$('h1').last().after(assignment5Initial)

var assignment5Improved = '<p>-Below you can find and use the improved assignment 5 bar chart:</p>'

$('p').last().after(assignment5Improved)

//implement the necessary firebase script
 
$('head').append("<script src='https://cdn.firebase.com/v0/firebase.js'></script>")
      
//---------------------------------------------------

//making and implementing the form
 
var inputs = "<input type='text' id='nameInput' placeholder='Olympic Game'><input type='number' id='medalsInput' placeholder='Medals Total'><input type='checkbox' id='boolInput' placeholder='Summer Games'><label for='boolInput'>Summer Games</label><button type='submit' class='submit'>Submit</button>"

$('p').last().after(inputs)
 
var firebaseData = new Firebase("https://assignment5.firebaseio.com");
 
var allData = null;
var allDataCount = 0; 

 
firebaseData.once('value', function(snapshot) {
  allData = snapshot.val();
  allDataCount = snapshot.numChildren(); // this is the index to increment off of
});
 
//pass comands that will add data
 
$('.submit').on('click', function (evt) { 
  var gameName = $('#nameInput').val(); 
  var medalCount = $('#medalsInput').val(); 
  var bool = $('#boolInput').is(':checked'); 
  firebaseData.child('/' + allDataCount).set({
     games: gameName, 
     medals: medalCount, 
     summergames: bool
  }); 
  allDataCount += 1; // increment since we still don't have the reference
});
    
//---------------------------------------------------
 
//implement the d3 bar chart
 var chartTitle = '<h2>Dutch Olympic Medals</h2>'
$('p').last().after(chartTitle)
var dataSource =  '<p>Source: https://en.wikipedia.org/wiki/Netherlands_at_the_Olympics</p>'
$('p').last().after(dataSource)
var legend = '<p style="color:orange;font-size:20px;"> - Summer Games</p><p style="color:darkblue;font-size:20px;"> - Winter Games</p>'
$('p').last().after(legend)
 

/* This 

firebaseData.on('value', function(d) {
assignmentdata = d.val()
});

and countless other tries and functions did not work, that is why chose to update the data-added chart by adding updated charts: 


YEEHAA: You need to separate your init logic from your update logic in d3.
There are countless examples of this on the web. Check them out.

Start with a simple chart first, then bring everything else back in.
*/
 
firebaseData.on('value', function() {

 d3.json( 'https://assignment5.firebaseio.com/.json', 
  function (assignmentdata){;
 
var margin = { top: 20, right: 20, bottom: 20, left: 40 };
var w = 800 - margin.left - margin.right; 
var h = 550  - margin.top - margin.bottom;
var chartHeight = 400;
var barPadding = 5
 
var medals = function(d) { return d.medals * 30};
var medal = function(d) { return d.medals};
var games = function (d) {return d.games};
 
//add svg area
 
var svg = d3.select("body")
            .append("svg")
            .attr("width", w + margin.left + margin.right)
            .attr("height", h + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
 
 
//generate scales and axes
            
var xScale = d3.scale.ordinal()
  .domain(d3.range(assignmentdata.length))
  .rangeRoundBands([0, w], 0.2);
 
  var yScale = d3.scale.linear()
  .domain([0, d3.max(assignmentdata, function(d) { return d.medals; })])
  .range([chartHeight, 0])
 
var yAxis = d3.svg.axis()
  .scale(yScale)
  .orient("left")
  .ticks(5);
 
//group  chart elements
 
var barChart = svg.selectAll('g')
    .data(assignmentdata)
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
      return yScale(d.medals);
    })
    .attr('width', xScale.rangeBand()) 
    .attr('height', function(d){
      return chartHeight - yScale(d.medals);
    })
  .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})
.on("mouseover", function() {
        d3.select(this)
          .attr("fill", "purple");})
.on("mouseout", function() {
        d3.select(this)
        .transition()
        .duration(250)
          .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})})
.attr('stroke', function(d){
    if(d.summergames){
      return 'orange';
    }
    return 'darkblue';
  })
    .style('stroke-width', '4px')
 
//add bar data labels
            
barChart.append("text")
    .text(medal)
    .attr("text-anchor", "middle")
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", function(d) { return yScale(d.medals) + 20; })
    .attr("font-family", "calibri")
    .attr("font-size", "14px")
    .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})
 
//add bar names
 
  barChart.append("text")
    .text(games)
    .attr("x", function(d, i) { return xScale.rangeBand() / 2; })
    .attr("y", chartHeight + 10)
    .attr("font-family", "calibri")
    .attr("font-size", "14px", "bold")
    .attr("fill", function(d) {
    return "rgb(64, 224, " + (d.medals * 10) + ")";})
    .style("writing-mode", "tb");
 
//add yAxis
  
  svg.append("g")
    .attr("class", "axis")
    .call(yAxis)
    .attr("fill", "#black")
    //.attr("stroke", "black")
    .attr("font-family", "calibri")
    .attr("font-size", "16px")


});

});
 
//alert when data is added
    
firebaseData.on('value', function(d) {
	alert('New data has been added successfully!')
});

// Overall 
// -------
// It is clear that you are one of the strongest programmers in the
// group, and I really like the fact that you are going back repeatedly
// to improve and refactor your code (although you should move away
// barcharts now...). you are also actively thinking on how to translate
// your newly acquired skills back to humanities' research, which is
// also very important.
//
// Where your work needs improvement is the presentation of your portfolio.
// For the next time, think about what you want to show me, and why that's
// important.
