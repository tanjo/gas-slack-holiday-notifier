function main() {
  var holiday = getHoliday(now);

  if (!holiday) {
    Logger.log("祝日ではありません");
    return;
  }

  post([holiday]);
}

function getHoliday(date) {
  if (!date) {
    date = new Date();
  }
  var calendar = CalendarApp.getCalendarById("ja.japanese#holiday@group.v.calendar.google.com");
  var calendarEvents = calendar.getEventsForDay(date);
  if (calendarEvents.length === 0) {
    return null;
  }

  var event = calendarEvents[0];

  return {
    "color": "#ff0000",
    "title": "*" + event.getTitle() + "*",
    "title_link": createUrl(event, calendar.getId()),
    "mrkdwn_in": ["text"]
  };
}

function createUrl(event, calendarId) {
  var splitEventId = event.getId().split("@");
  return "https://www.google.com/calendar/event?eid=" + Utilities.base64Encode(splitEventId[0] + " " + calendarId);
}
