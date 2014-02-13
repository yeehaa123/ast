course = require('./course')
moment = require('moment')

docpadConfig =
  templateData:
    site:
      title: "Art, Science, and Technology"
    course: course
  collections:
    sessions: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'sessions'},{"order-prop": 1})
  plugins:
    handlebars:
      helpers:
        getDate: (date) ->
          moment(date, "DD-MM-YYYY").format("dddd, MMMM Do YYYY");
        getSessionDate: (orderProp) ->
          weekNumber = orderProp - 1
          sessionDate = docpadConfig.templateData.course.info.dates[weekNumber]
          moment(sessionDate, "DD-MM-YYYY").format("dddd, MMMM Do YYYY");
        isFirst: (index) ->
          "Staff:" if index is 0
        toJSON: (context) ->
          JSON.stringify(context)

module.exports = docpadConfig
