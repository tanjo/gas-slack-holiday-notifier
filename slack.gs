function post(attachments) {
  var url = 'https://slack.com/api/chat.postMessage';
  var token = '<# Slack API トークン>';

  var payload = {
    text: " ",
    token: token,
    channel: '<# #slack-channel-name>',
    username: 'とあるカレンダー',
    icon_emoji: ':calendar:',
    attachments: JSON.stringify(attachments)
  };
  var params = {
    method: 'POST',
    payload: payload
  };

  var response = UrlFetchApp.fetch(url, params);
  Logger.log(response);
}
