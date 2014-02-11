$(document).ready(function(){
  $('body').css({'background-color': '#539', 'border-color': '2px solid #967'});
  $('body').css({
    'background-color': 'greenyellow',
    'font-family': 'Cambria'
  });

  $(".syllabus > hgroup").css("background-color", "#ffc754");

  $("title").text("New title");

  $("h1").css({ 'color': '#DF0101', 'font-size': '150%' });
  $('h1').css({
    'color': '#660066',
    'font-weight': 'bold'
  });
  $( "h1" ).css( "border", "2px solid red" ).add( "p" ).css( "background", "yellow" );

  $("a").css({"color": "black"});
  $("a").on("click", function() { $(this).css({"color": "green"});});

  $("ul").hide();

  $('table').css({
    'background-color': 'green',
    'color': 'brown',
    'font-weight': 'bold'
  });

  $(".info").find("table").css("background-color","black");
  $(".info").find("td").css("border","black");
  $(".info").find("a").css("color","black");
  /* $(".info" ).mouseover(function() { */
  $(".info table" ).mouseover(function() {
    $('<img>',{src:"http://static.skynetblogs.be/media/10565/dyn003_original_250_218_pjpeg__3ee4b120bdc25370a3e5114c8b7da1e8.2.jpg"}).insertBefore(".email-policy");
    $(".info").hide();
    $(".info").mouseleave(function() {
      $("img").hide();
      $(".info").show();
    });});

  $(".email-policy").children("p").text("All students are welcome to email or phone me at any point, whenever it feels right for you. I will be sure to respond you your queries within 15 minutes.");
  $(".email-policy p").text("Questions should always be asked by email. I will respond to your email within an hour")
  $(".email-policy h1").css({"color": "red", "font-size": "2em"});
  $(".email-policy").css("background-color","#cc0000");

  var cat = $('<p><img src="http://i.imgur.com/awJ5yso.jpg"></p>');
  $(".email-policy").find("p").remove();
  $(".email-policy").append(cat);
  
  $(".objectives h1").css({"color": "red", "font-size": "2em"});
  $(".objectives").css("background-color","#AA10EC");

  $(".description h1").css({"color": "red", "font-size": "2em"});
  $(".description").css("background-color","#EC10D2");

  $(".requirements h1:first").css({"color": "red", "font-size": "2em"});
  $(".requirements").css("background-color","#EC1094");

  $('.deadlines li:first').text('deadline 1: Whenever you feel like handing it in');
  $('.deadlines li:last').text('deadline 2: Some time after you have met the first deadline');
  $(".deadlines").text("No Deadlines for this course"). css({'background-color': '#666', 'border-color': '2px solid #967'});
  $('.deadlines ul').remove();
  $('.deadlines').append("<img src='http://www.vpwallpapers.com/wp-content/uploads/2013/11/Cat-Wallpaper-10.png' />");

  $('.assessment blockquote').text("Final Grade = 8! :D");

  $(".prerequisites").children("h1").css({ 'color': '#DF0105', 'font-size': '150%' });
  $(".prerequisites").children("p").text("Be Aware! This course is highly challenging and must be followed with precaution! ");
  $('section.prerequisites').text('Prerequisites; You need to be able to have a great memory for remembering all of the commands. Such a shame I can not remember how to make a title in Jquery, else this would have been a much nicer looking piece.').css({'background-color': '#784', 'border-color': '2px solid #967'});

  $(".info tr:first td:first").text("the BOSS")

  $(".resits").children("#appeals, if").text("You wish to object to the assessment of an exam, you can try. First, please, find more info on complaints, objections and appeals here.");
  // $('.resits').children("#appeals, if").append('<div> <a href="http://rockinmomsworld.files.wordpress.com/2013/11/channing-tatum-giving-the-finger-reaction-gif-in-21-jump-street.gif">here</a> </div>');
  // 
  $('.resits').children("#appeals, if").append('<img src="http://rockinmomsworld.files.wordpress.com/2013/11/channing-tatum-giving-the-finger-reaction-gif-in-21-jump-street.gif"</img>');

  $(".schedule h1:first").css({"color": "red", "font-size": "2em"});
  $(".schedule").css("background-color","#7010EC");

  $('.session-info, .schedule h1').css({
    'text-align': 'center'
  });

  $('.schedule h1').on('click', function() {
    $(this).siblings("table").slideToggle("slow")
  });


  $(".assignment").find("h1").text('Assignment (click me!)');
  $('.assignment').on('click', "h1", function() { 
    var message = ('<p>Good Luck!</p>'); 
    $('.assignment').append(message); 
  });


  var shown = 0;
  var table_mod = "<tr class='student'><td>Students:</td><td>Sebastiaan Tijsma</td><td><a href='https://github.com/Seb-T/AST'><img src='https://raw.github.com/Seb-T/AST/master/github_icon.png'></a></td></tr><tr class='student'><td></td><td>... and many others</td></tr>";
  $("table").first().after("<button>Show students</button>");
  $("button").on("click", function() {
    if (shown == 0) {
      $("table").first().append(table_mod);
      shown = 1;
      $("button").text("Hide students");
    } else {
      $(".student").remove();
      shown = 0;
      $("button").text("Show students");
    }
  });
})
