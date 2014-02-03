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
    emailPolicy: "Questions can be asked during my ofﬁce hours. Email is only 
                  for urgent matters and should be avoided as much as possible. 
                  Do not assume that I will respond to your email, or read it 
                  in time."
  objectives: [
    "Introduction to programming and its relevance for doing research in the 
     humanities",
    "Overview of key concepts and texts in philosophy of technology",
    "Pursue collective research on the implications of contemporary 
     technological developments on academic and artistic practices."
  ]
  requirements: 
    prerequisites:
      resources: 
        online: [
          title: "Web Track"
          url: "http://www.codecademy.com/tracks/web"
          site: 
            name: "Codecademy"
            url: "http://www.codecademy.com"
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


course.requirements.description = "<p>My master level courses are research 
based. This means that I engage you in my current research projects, and that 
you are expected to set up your own project during the semester. As a result, 
the level is advanced from the start and there is little time to catch up in 
between. You should spend 20 hours a week on average on this course 
(corresponds to 12 ECTS). Make sure that you (pro-)actively participate 
throughout the semester.</p>

<blockquote>Do not postpone your assignments until the week of the deadline!
</blockquote>

<p>In order to successfully complete this course, you have to complete two 
assignments (the ﬁrst is 30% of your ﬁnal grade, the second 50%) and give a 
presentation (20%).</p>

<p>Weekly readings, coding exercises, and participation are also mandatory 
but not graded separately. Failing these requirements, however, can lead 
to a failing grade.</p>"


course.requirements.prerequisites.description = "You do not need prior
experience in coding to follow this course. I do expect you to do some minor 
preparatory work, however. Before the second session, you should have 
completed tutorials listed below. Anyone that fails to meet this requirement 
cannot participate in this course."


course.requirements.appeals =  "If you wish to object to the assessment of an 
exam, please contact the Examinations Board. More information on the 
Examinations Boards is available <a href='http://www.student.uva.nl/fgw_onderwijs/
object.cfm/9CF8016C-4F4B-4935-8C9269FEA1774863'>here</a>. If you do not agree 
with a decision by the Examinations Board, you may lodge an appeal with the 
Examinations Appeal Board (COBEX). For more university information on 
complaints, objections and appeals, please visit <a href='http://www.student.uva.nl/
a-z/klachten.cfm'>this link</a>."


course.requirements.resits = "A resit of this class is only possible, if you 
met all requirements listed above in time and your ﬁnal grade is below a 5.5. 
The resit consists of an entirely new version of both assignment 1 and 2. The 
resit for the ﬁnal paper takes place in July. You will have the entire month 
to complete your new project."


module.exports = course
