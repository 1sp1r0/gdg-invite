module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Gdg-abc',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'gdg-abc.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-4012316619-9880643810-35560591988-a15471c9aa',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,

  locale: process.env.LOCALE || "pt",
};

/*
curl -X POST 'https://gdg-abc.slack.com/api/users.admin.invite' \
--data 'email=fioalpha@gmail.com&token=xoxp-7372960210-7372629744-35644399968-0319f2cfeb&set_active=true' \
--compressed


curl -X POST 'https://gdg-abc.slack.com/api/users.admin.invite'\
--date 'token=xoxp-7372960210-7372629744-35582044738-20d2a3972d'\
--compressed


client_id=7372960210.35641485493
client_secret=7b8f3ea23c9b5a8b1bcdc7063550f5e7
code=7372960210.35639601552.5ac4163301
*/