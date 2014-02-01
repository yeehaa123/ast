course = require('./course')

docpadConfig =
  templateData:
    site:
      title: "Art, Science, and Technology"
    course: course
  collections:
    sessions: ->
      @getCollection("html").findAllLive({relativeOutDirPath: 'sessions'})
  plugins:
    handlebars:
      helpers:
        getDate: (index, dates) ->
          docpadConfig.templateData.course.info.dates[index]
        isFirst: (index) ->
          "Staff:" if index is 0

module.exports = docpadConfig
