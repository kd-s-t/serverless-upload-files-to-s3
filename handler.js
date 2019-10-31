'use strict'

const meetupService = require('./service/index');

module.exports = {
  hello: async(event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Hello! you are now connected!'
        },
        null,
        2
      ),
    }
  },
  upload: async(event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Uploading image'
        },
        null,
        2
      ),
    }
  }
}

module.exports.getMeetupEventsCalendar = function(event, context, callback) {
  const calendarEventId = event.pathParameters.id;
  meetupService.getIcalEvents(calendarEventId);
  const response = {
    statusCode: 200,
    body: JSON.stringify({ "message": 'Calendar Created for ' + calendarEventId + '!'})
  };
  callback(null, response);
}

// module.exports.setGroupId = function(event, context, callback) {
//   const groupId = event.pathParameters.groupId;
//   meetupService.setGroupId(groupId);
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({"message": "GroupId " + groupId + " saved Successfully!"})
//   };
//   callback(null, response);
// }