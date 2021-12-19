const express = require('express');
const port = 8000;
const app = express();
const expressLayouts = require('express-ejs-layouts')//for accesing all ejs files in single layout

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true); 

app.use('/', require('./routes'));




app.set('view engine' , 'ejs');
app.set('views', 'views');



app.listen(port, (err) =>{
    if(err){
        console.log('Error in running server ', port);
        return;
    }

    console.log("Server is up and running on port ", port)
})