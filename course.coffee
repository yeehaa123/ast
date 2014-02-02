course =
  title: "Art, Science, and Technology"
  subtitle: "Coding the Humanities"
  info:
    location: "P.C. Hoofthuis 4.59"
    time: "14:00 - 18:00"
    dates: [
      "4/2/2014",
      "11/2/2014",
      "18/2/2014",
      "25/2/2014",
      "4/3/2014",
      "11/3/2014",
      "8/4/2014",
      "15/4/2014",
      "22/4/2014",
      "29/4/2014",
      "6/5/2014",
      "13/5/2014"
    ]
    instructor: "Jan Hein Hoogstad"
    staff: [
      "Johanna Barnbeck",
      "Marijn Koolen",
      "Melle Kromhout",
      "Geli Mademli",
      "Kate Moore",
      "Melvin Wevers"
    ]
  sessions: ->
    @getCollection('sessions').toJSON()

course.description = "<p>Computers are literally everywhere. Through heterogeneous
interfaces - such as sensors, transistors, and servo motors - they are 
inextricably linked to works of art, bodies, and spaces. As a result, it is 
difﬁcult to analyse cultural objects independent of their technological 
apparatus.</p>

<p>Nevertheless, scholars in the humanities are reluctant to learn about the 
hard-, wet-, and software of art, literature, culture, and politics. In this 
course we will modestly attempt to compensate for our discipline's digital 
illiteracy and research the following question:</p>

<blockquote>What kind of approaches, methods and techniques are needed to 
analyse the technological dimension of contemporary cultural objects?
</blockquote>

<p>Rather than approaching this question from a purely theoretical perspective, 
we will learn to code ourselves. Programming, however, is only a means to an 
end. We will treat code as a particular form of knowledge organisation. The 
goal of this course is not to turn you into professional programmers, but to 
gain an additional tool to pursue your research.</p>"

module.exports = course
