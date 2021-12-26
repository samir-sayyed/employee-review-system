const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts')//for accesing all ejs files in single layout
const session = require("express-session");
const db = require('./config/mongoose');
app.use(express.static('./assets'));
const passport = require("passport");
const localStrategy = require('./config/passport');
const MongoStore = require('connect-mongo')


app.use(express.urlencoded());
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true); 


app.set('view engine' , 'ejs');
app.set('views', 'views');

app.use(session({
    name:'employee-review-runinig',
    //TODO change the secreat before deployment in production
    secret:'blahblahblah',
    saveUninitialized:false, // when user is not logged in then should i save extra data.
    resave:false,  // when user is login if session data is not changed it will prevent to resaving again and again
    cookie:{
        maxAge:(1000*60*100)
    },
    store: MongoStore.create(
        {
            mongoUrl:'mongodb+srv://samirsayyed:786Samir!@cluster1.7ryvl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
            autoRemove:'disabled'
        },
        function(err){
            console.log(err||'connect to the mongo connect');
        }
    ),
  }));

  // initilizing the passport.js
app.use(passport.initialize());
app.use(passport.session());
// this middle ware add user to responce of which can be used to creating the UI.
app.use(passport.setAuthenticatedUser)

app.use('/', require('./routes'));


app.listen(port, (err) =>{
    if(err){
        console.log('Error in running server ', port);
        return;
    }

    console.log("Server is up and running on port ", port)
})