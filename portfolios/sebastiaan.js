/*
  Required JavaScript libraries:
    - jQuery
    - Firebase
    - D3
    - D3 Layout Cloud
  --> script can run on: http://seb-t.github.io

  To do:
    - visualize 200 most frequently used words instead of first 200
    - improve text clean-up

  Could do:
    - more CSS-HTML separation
    - menu event delegation
    - add other info field to use instead of alerts
    - load used libraries from script itself

  Bugs:
    - descriptions text is lost on menu tab change
*/

// Globals
var aldailyHTML = null;
var descriptions = null;
var descriptionWords = null;

// Start
setupHTML();
setupMenu();

// Grab some space at the top of the web page to act as our interface
function setupHTML() {
  $('body').prepend('<div id=humvis></div>');
  $('#humvis').css({'width' : '600px', 
                    'height' : '600px',
                    'background-color' : 'lightgray',
                    'border-style' : 'solid',
                    'border-width' : '2px',
                    'margin-top' : '5px'
  });
}

// Menu functionality and hover effect
function setupMenu() {

  // Insert HTML
  var html = '\
    <div class="menu">\
      <div class="menuItem">Project Humvis</div>\
      <div class="menuItem">Data Processing</div>\
      <div class="menuItem">Visualization</div>\
    </div>\
  ';
  $('#humvis').prepend(html);

  // Add CSS
  $('.menu').css({});
  $('.menuTitle').css({'float' : 'left',
                       'background-color' : 'lightgrey',
                       'color' : 'black',
                       'font-weight' : 'bold',
                       'text-align' : 'center',
                       'padding' : '5px'
  });
  $('.menuItem').css({'float' : 'left',
                      'background-color' : 'grey',
                      'color' : 'white',
                      'text-align' : 'center',
                      'padding' : '5px',
                      'margin-right' : '1px'
  });

  // Functionality
  var menuSelected;
  $('.menuItem').hover(
      function() { 
        // Ignore if hovered item is the currently selected menuItem
        var t = $(this).text();
        if (t != menuSelected) {
          $(this).css('background-color', 'black'); 
        }
      },
      function() {
        // Ignore if hovered item is the currently selected menuItem
        var t = $(this).text();
        if (t != menuSelected) {
          $(this).css('background-color', 'grey');
        }
      }
  );
  $('.menuItem').click(function() {
    var t = $(this).text();
    if (t != menuSelected) {
      $('.menuItem').css({'background-color' : 'grey',
                          'color' : 'white',
                          'font-weight' : 'normal'
      });
      $(this).css({'background-color' : 'lightgrey',
                   'color' : 'black',
                   'font-weight' : 'bold'
      });
      menuSelected = $(this).text();
      switch (menuSelected) {
        case 'Project Humvis':
          projectHumvis();
          break;
        case 'Data Processing':
          dataProcessing();
          break;
        case 'Visualization':
          visualization();
          break;
      }
    }
  });

  // Simulate first click
  $('.menuItem').eq(0).css({'background-color' : 'lightgrey',
                            'color' : 'black',
                            'font-weight' : 'bold'
  });
  menuSelected = 'Project Humvis';
  projectHumvis();
}

// Display about tab
function projectHumvis() {
  $('#content').remove();
  var html = '\
    <div id="content" style="clear: both">\
      <textarea  style="width: 575px; height: 300px; margin-left: 10px; margin-top: 10px; resize: none"></textarea>\
    </div>\
  ';
  $('#humvis').append(html);
  var message = '\
Welcome to Project Humvis 0.1!\n\n\
The aim of this tool is to offer a visual representation of the current semi-popular debate in the humanities as it happens online.\n\n\
As the starting point we take the website Arts and Letters Daily (aldaily.com). This long running website indexes links to online articles dealing with topics such as philosophy, literature, history, art, and other fields belonging to the humanities.\n\n\
In this alpha version of Project Humvis we limit ourselves to a simple "word cloud" visualization of the short descriptions given of each indexed article.\n\n\
The full version of Project Humvis will aim to visualize the collection of actual articles themselves, rather than their short descriptions. Also it will allow the user to assign relative weight to the words and concepts used in the articles, in relation to the humanities.\n\n\
Sebastiaan Tijsma\n\
April 3rd, 2014\
  ';
  $('textarea').text(message);
}

// Display Data Processing tab
function dataProcessing() {
  $('#content').remove();
  var html = '\
    <div id="content" style="clear: both; margin-left: 10px">\
      <textarea name="urlHTML" placeholder="Output window" style="width: 575px; height: 300px; margin-top: 10px"></textarea>\
      <button type="button" onclick="buttonLiveAldailyHTML()">Get</button>Use anyorigin.com to get the HTML source of the current aldaily.com page<br>\
      <button type="button" onclick="buttonStoreAldailyHTML()">Store</button>Store HTML source in Firebase<br>\
      <button type="button" onclick="buttonRetrieveAldailyHTML()">Retrieve</button>Load previously stored HTML source (use when Get returns \'alarm\')<br><br>\
      <button type="button" onclick="buttonProcessHTML()">Process I</button>Filter article descriptions from HTML source<br>\
      <button type="button" onclick="buttonProcessWords()">Process II</button>Filter words from article descriptions <br><br>\
      After succesfully performing Process II, click the Visualization tab.\
    </div>\
  ';
  $('#humvis').append(html);
  $('textarea[name="urlHTML"]').text(aldailyHTML);
}

// Display Visualization tab
function visualization() {

  $('#content').remove();
  var html = '<div id="content" style="clear: both; background-color: white; margin-top: 50px;"></div>';
  $('#humvis').append(html);

  if (descriptionWords == null) {
    alert('Please complete Data Processing first.');
  } else {

      var fill = d3.scale.category20();

      d3.layout.cloud().size([600, 500])
        .words(descriptionWords.map(function(d) {
        return {text: d, size: 10 + Math.random() * 90};
        }))
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", draw)
        .start();

      function draw(words) {
        d3.select("#content").append("svg")
          .attr("width", 600)
          .attr("height", 500)
          .append("g")
          .attr("transform", "translate(300,250)")
          .selectAll("text")
          .data(words)
          .enter().append("text")
          .style("font-size", function(d) { return d.size + "px"; })
          .style("font-family", "Impact")
          .style("fill", function(d, i) { return fill(i); })
          .attr("text-anchor", "middle")
          .attr("transform", function(d) {
            return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
          })
          .text(function(d) { return d.text; });
      }

}
}

// Get HTML source
function buttonLiveAldailyHTML() {
  /* 
    The website anyorigin.com makes it possible to retrievce the HTML source of any page, bypassing security limitations. It works in most cases but sometimes returns 'alarm'. Probably to urge users to donate to stop usage limitations.
  */
  url = 'aldaily.com';
  $.getJSON('http://anyorigin.com/dev/get?url=' + url + '&callback=?', function(data) {
    console.log(data);
    aldailyHTML = data.contents;
    $('textarea[name="urlHTML"]').text(aldailyHTML);
  });
}

// Store in Firebase
function buttonStoreAldailyHTML() {
  var humvisRef = new Firebase('https://torid-fire-130.firebaseio.com/humvis/');
  if (aldailyHTML != 'alarm' && aldailyHTML != null) {
    humvisRef.child('aldailyHTML').set(aldailyHTML);
    alert('Data stored in Firebase');
  }
  else {
    alert('No data stored');
  }
}

// Retrieve from Firebase
function buttonRetrieveAldailyHTML() {
  var humvisRef = new Firebase('https://torid-fire-130.firebaseio.com/humvis/');
  humvisRef.on('value', function(snapshot) {
    if (snapshot.val() === null) {
      alert('No data found');
    } else {
      aldailyHTML = snapshot.val().aldailyHTML;
      $('textarea[name="urlHTML"]').text(aldailyHTML);
      alert('Data retrieved');
    }
  });
}

// Filter descriptions text from HTML source
function buttonProcessHTML() {
  // Cut off HTML before and after the data we are interested in
  var sliceStart = aldailyHTML.search(/<span class='articles-of-note'>/);
  var sliceEnd = aldailyHTML.search(/<!-- BEGIN CONTENT COLUMN `3 -->/);
  aldailyHTMLSliced = aldailyHTML.slice(sliceStart, sliceEnd);
  //console.log(aldailyHTMLSliced);

  descriptions = '';

  // Figure out the amount of Articles of Note and store descriptions in string
  var x = aldailyHTMLSliced.match(/articles-of-note/gi);
  var y = x.length;
  for (var i = 0; i < y; i ++) { 
    //  Store span.
    var spanStart = aldailyHTMLSliced.search("<span class='articles-of-note'>");
    var spanEnd = aldailyHTMLSliced.search("</span>") + 7;
    descriptions = descriptions + $(aldailyHTMLSliced.slice(spanStart, spanEnd)).text() + '\n';
    //  Cut span from htmlStringSliced
    aldailyHTMLSliced = aldailyHTMLSliced.slice(spanEnd);
  }

  // Figure out the amount of New Books and store descriptions in string
  var x = aldailyHTMLSliced.match(/new-books/gi);
  var y = x.length;
  for (var i = 0; i < y; i ++) { 
    //  Store span.
    var spanStart = aldailyHTMLSliced.search("<span class='new-books'>");
    var spanEnd = aldailyHTMLSliced.search("</span>") + 7;
    descriptions = descriptions + $(aldailyHTMLSliced.slice(spanStart, spanEnd)).text() + '\n';
    //  Cut span from htmlStringSliced
    aldailyHTMLSliced = aldailyHTMLSliced.slice(spanEnd);
  }

  // Figure out the amount of Essays and Opinion and store descriptions in string
  var x = aldailyHTMLSliced.match(/essays-and-opinion/gi);
  var y = x.length;
  for (var i = 0; i < y; i ++) { 
    //  Store span.
    var spanStart = aldailyHTMLSliced.search("<span class='essays-and-opinion'>");
    var spanEnd = aldailyHTMLSliced.search("</span>") + 7;
    descriptions = descriptions + $(aldailyHTMLSliced.slice(spanStart, spanEnd)).text() + '\n';
    //  Cut span from htmlStringSliced
    aldailyHTMLSliced = aldailyHTMLSliced.slice(spanEnd);
  }

  // Clean up string.
  descriptions = descriptions.replace(/moreÂ»/g, '');
  descriptions = descriptions.replace(/more»/g, '');
  descriptions = descriptions.replace(/â€™/g, "'");
  descriptions = descriptions.replace(/â€“/g, "-"); 
  descriptions = descriptions.replace(/â€œ/g, '"');         
  descriptions = descriptions.replace(/â€/g, '"');

  $('textarea[name="urlHTML"]').text(descriptions);
}

// Get words from description string and prepare for visualization
function buttonProcessWords() {
  descriptionWords = descriptions.split(" ");
  // Get the first 200 words - TODO: get the 200 most frequent words
  descriptionWords = descriptionWords.slice(0,199);
  $('textarea[name="urlHTML"]').text(descriptionWords);
}

