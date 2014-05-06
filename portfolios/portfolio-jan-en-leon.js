// Separation of Concerns 
// ----------------------
// Although it does show a strong understanding of jQuery, this is the wrong 
// approach to making webpages. Think back to what I've said about [separation
// of concerns]() - JavaScript for behavior, CSS for Styling, HTML for content.
// Here you are using JavaScript for all three of them.

$('<div><h1><strong>Portfolio 1 by Jan Zuilhof & Leon Meuwese<strong><p></P></h1></div>').appendTo('body');


$('<div><p>This is the portfolio of Leon Meuwese and Jan Zuilhof. We have worked together on many things, so we considered it appropriate to design the layout together as well. The contents differ somewhat, although some codes are the same because we have written them together.</p>')

 
// Create Divs
// ------------
// This is a good example of why creating static content dynamically (i.e with
// JavaScript is not a good idea. It becomes chaotic quite easily, since things
// that should be grouped together get scattered throughout the page.

var JANLEON = $('<div />').appendTo('body'); JANLEON.attr('id','JL');
var div1 = $('<div />').appendTo('body'); div1.attr('id', 'Ass1');
var div2 = $('<div />').appendTo('body'); div2.attr('id', 'Ass2');
var div3 = $('<div />').appendTo('body'); div3.attr('id', 'Ass3');
var div4 = $('<div />').appendTo('body'); div4.attr('id', 'Ass4');
var div5 = $('<div />').appendTo('body'); div5.attr('id', 'Ass5');
 
 
$('<h1>Assignment 1</h1>').appendTo('#Ass1');
$('<h1>Assignment 2</h1>').appendTo('#Ass2');
$('<h1>Assignment 3</h1>').appendTo('#Ass3');
$('<h1>Assignment 4</h1>').appendTo('#Ass4');
$('<h1>Assignment 5</h1>').appendTo('#Ass5');


// Quotation Marks
// ---------------
// This is the reason why your text version does not work. You are using single
// quotes to delimit the strings, but you also use it inside your text.
// JavaScript sees that as a sign that the string has ended.
 
// Assignment 1
// ------------
// It was not really a very serious assignment to begin with. Leon, did the same
// apply to you, or is this specific for Sander's experiences?

$('<p>From the very first moment I started doing the HTML coarse prior to the lectures, I found out that this coarse was not going to be easy for me. I thought I wouldn't find it difficult, but for some reason the laws of code did not enter my mind without struggle. As a result, I fell behind from week one, and handed in a very poor excuse for an assignment, although I think it was formally correct.</p><p>Click<a href="https://gist.github.com/JanZuilhof/9209765"> here </a>for Assignment 1</p>').appendTo('#Ass1');
 
// Assignment 2
// ------------
// Same question, does this only apply to Jan or also to Leon?

$('<p>Although now it does not seem that complicated to me anymore, at the time I definitely struggled wit the assignment. Because some basic things in code and the idea of a script were not clear to me, it took a while for me to understand what I was really doing.</p><p>Click <a href="https://gist.github.com/JanZuilhof/9006180">here </a> for Assignment 2</p>').appendTo('#Ass2');
 
// Assignment 3
// ------------
// Okay, this is exactly what is expected from you at this point in the course.

$('<p>There are pretty colors</p><p>Click <a href="https://gist.github.com/JanZuilhof/9233448">here </a> for Assignment 3</p>').appendTo('#Ass3');
 
// Assignment 4
// ------------
// Same here...

$('<p>We have struggled quite a bit with this one. It was especially difficult for us that it seemed like every tutorial skips the first steps. The Firebase tutorial, for instance, threw us in much deeper than expected and necessary. However, we did eventually get the code to work.</p><p>Click <a href="https://gist.github.com/JanZuilhof/9314707">here </a>fore Assignment 4</p>').appendTo('#Ass4');

// Assignment 5
// ------------
// The problem has to do with the nature of the submit button, which has as its
// default behavior that it sends a post request to the web server. Adding a
// preventDefault in your event handler will solve this problem.

$('<p>At first, it seemed like it was going to work without all the struggles we had in previous weeks. However, the code once again had a mind of its own. We don't understand what goes wrong. Every time we run the code, it displays the graph as well as the submission fields. However, when the submit button is clicked, it all disappears. Furthermore, I seems like it updated the Firebase before, but it doesn't do that anymore. Very frustrating!</p><p>Click <a href="https://gist.github.com/JanZuilhof/9417346">here </a>for Assignment 5</p>').appendTo('#Ass5');

 
// Styling
:qa
// -------
// Another good reason to separate concerns. I find it very difficult ro read
// those styles below.
 
$('body').css({'background-image': 'url("http://31.media.tumblr.com/353f0e35dd964b398f2e8ba58019ae9c/tumblr_n3cydw9aBu1s8nwbvo1_1280.jpg")','background-size':'110%','background-color': '#CC99FF','color': '#C93E0F','text-align':'center'});
$('h1').css({'margin-top':'20px','margin-bottom':'10px','border':'2px solid absolu','border-style':'groove','border-radius':'25px','background': 'linear-gradient(to left, #A7DCB8 , white)','position':'relative','padding':'6px 10px'});
