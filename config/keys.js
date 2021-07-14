//add this file to gitignore

module.exports = {
  google: {
    // this clientID and clientSecret are given to us from google
    clientID:
      '979104596982-qkkdoare2fms3gaqne9v3pkbfs6bnppt.apps.googleusercontent.com',
    clientSecret: '2h4K44PG0SUQzPq6eU1abQs7',
  },
  postgres: {
    // here is our postgres URL
    PG_URI:
      'postgres://fojeewoc:yKLXZvm6DqRW840uEqmWDnT3OdGmYW_n@suleiman.db.elephantsql.com:5432/fojeewoc',
  },
  session: {
    // this cookieKey is going to encrypt our cookie so that folks can't just see our cookie
    cookieKey: 'dfkjghsjdhasdakjsdan',
  },

  facebook: {
    clientID: '383299809591566',
    AppSecret: 'cd417d5c4a4272542fe535826b91e7c1',
  },
};
