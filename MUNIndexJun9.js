#!/usr/bin/nodejs

// -------------- load packages -------------- //
console.log("SERVER STARTING...")
console.log()

var express = require('express')
var app = express();
var mysql = require('mysql');
var ejs = require('ejs');
app.set('view engine', 'ejs');
app.use(express.static("static_files"))


var sql_params = {
  connectionLimit : 10,
  user            : process.env.DIRECTOR_DATABASE_USERNAME,
  password        : process.env.DIRECTOR_DATABASE_PASSWORD,
  host            : process.env.DIRECTOR_DATABASE_HOST,
  port            : process.env.DIRECTOR_DATABASE_PORT,
  database        : process.env.DIRECTOR_DATABASE_NAME
}

app.locals.pool  = mysql.createPool(sql_params);

const https = require('https')
const cookieSession = require('cookie-session')
const { AuthorizationCode } = require('simple-oauth2') // load packages

app.set('trust proxy', 1)
app.use(cookieSession({
  name: 'chocalatechip', // name of the cookie
  keys: ['sugar', 'gingerbread'] // keys to sign the cookie to make it secure
}))

const client_id = '012QdnzdmqL7bdxk4grFSIt8fwmO1EmcEQmYZS7G'
const secret_key = 'xJ6Nopsa04rfhd2kqDKU8JmqF0alSiZ4w5YNEYSKNZQEYiyIU4zWDqQWRhji7ZYlabkB7q5DsDvTaT0xNqstTeP05pNss4DE0YAjvMcHfJSjwJ7bp4Xc9hwOqGtcsq3u'
const client = new AuthorizationCode({
  client: {
    id: client_id,
    secret: secret_key,
  },
  auth: {
    tokenHost: 'https://ion.tjhsst.edu/oauth/',
    authorizePath: 'https://ion.tjhsst.edu/oauth/authorize',
    tokenPath: 'https://ion.tjhsst.edu/oauth/token/'
  }
})

const redirect_link = 'https://activities.tjhsst.edu/mun/login_worker' // this URL will be used to redirect the user after they have logged in
// the redirect link should be on your domain, so you can set an endpoint to it later
const authorizationUri = client.authorizeURL({
  scope: "read",
  redirect_uri: redirect_link
})

function checkAuthentication(req, res, next) {
  if ('authenticated' in req.session) { // the user is logged in
    next()
  }
  else {
    res.render('unverified', {'login_link' : authorizationUri}) // the user is not logged in, so render the unverified page and send the login link
  }
}

async function convertCodeToToken(req, res, next) {
  const options = {
    'code': req.query.code, // code we get after logging in
    'redirect_uri': redirect_link,
    'scope': 'read'
  }
  
  try {
    const accessToken = await client.getToken(options) // wait for oauth to get the token
    res.locals.token = accessToken.token // store the access token in res.locals.token
    next()
  } 
  catch (error) { // if there is an error getting the access token, we will send an error
    console.log('Access Token Error')
    console.log(error.message)
    res.render('other')
  }
}

function getProfile(req, res, next) {
  const access_token = req.session.token.access_token // get the access token from req.session
  const profile_url = 'https://ion.tjhsst.edu/api/profile?format=json&access_token='+access_token // get the API data from /profile using the access token
  
  https.get(profile_url, function(response) { // retrieve data from API
    let rawData = ''
    response.on('data', function(chunk) {
        rawData += chunk // as we get data from API, add it to rawData
    })

    response.on('end', function() {
      res.locals.profile = JSON.parse(rawData) // after we get all data, parse it as a JSON object and store it in res.locals.profile
      next()
  })
  
  }).on('error', function(err) {
      res.send("error retrieving data!") // if for some reason we get an error, send an error message
  })
}

app.get('/calendar', [checkAuthentication, getProfile], function (req, res) { // call middleware to check if logged in
  const profile = res.locals.profile // get profile from getProfile middleware
  const name = profile.display_name // get the firstname from the profile
  let img = "";
  let id = "";
  if (name !== undefined && name !== null && name.length > 1) {
      let sqlParams = [name];
      let sqlQuery = 'INSERT INTO users(name) VALUES (?);'
      app.locals.pool.query(sqlQuery, sqlParams, function(error,results,fields){
  
        // note that results will be empty here
        //  - this is an UPDATE query, not a SELECT query
        console.log("done")
      })
      img = profile.picture;
      id = profile.ion_username;
  }
  res.render('calendar', {'username' : name, 'picture' : img, 'id' : id}) // in middleware, the user is already sent to unverified if they are not logged in, so we can just render the verified page here
});

app.get('/login_worker', [convertCodeToToken], function(req, res) { // convert the code we got from logging in to an access token
  req.session.authenticated = true; // set authenticated to true as we are logged in
  req.session.token = res.locals.token // set access token in req.session
  res.redirect('./'); // redirect user back to home page
})

app.get('/logout', function (req, res) { // when a user visits /logout, they will be logged out
  delete req.session.authenticated
  res.redirect('./') // redirect user back to home page
});

app.get('/forms', [checkAuthentication, getProfile], function (req, res) { // call middleware to check if logged in
  const profile = res.locals.profile // get profile from getProfile middleware
  const name = profile.display_name // get the firstname from the profile
  let img = "";
  let id =""
  if (name !== undefined && name !== null && name.length > 1) {
      let sqlParams = [name];
      let sqlQuery = 'INSERT INTO users(name) VALUES (?);'
      app.locals.pool.query(sqlQuery, sqlParams, function(error,results,fields){
  
        // note that results will be empty here
        //  - this is an UPDATE query, not a SELECT query
        console.log("done")
      })
      img = profile.picture;
      id = profile.ion_username
  }
  res.render('forms', {'username' : name, 'picture' : img, 'id' : id}) // in middleware, the user is already sent to unverified if they are not logged in, so we can just render the verified page here
})

app.get('/', function(req, res) {
    res.render('index');
});

const main = require('./routes/main.js')
app.use(main);

const awards = require('./routes/awards.js')
app.use(awards);

const techmun = require('./routes/techmun.js')
app.use(techmun);
   
app.get('/:other', function(req, res) {
    res.render('other')
});


console.log("SERVER STARTED");
console.log("LISTENING");
// -------------- listener -------------- //
// // The listener is what keeps node 'alive.' 

var listener = app.listen(process.env.PORT || 8080, process.env.HOST || "0.0.0.0", function() {
    console.log("Express server started");
});