const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config()
const hc = require('./controller.js');

const app = express();
app.use( bodyParser.json() );
massive( process.env.CONNECTION_STRING ).then( connection => app.set('db', connection) );


app.get("/api/houses", hc.read);
app.post("/api/house", hc.create);
app.delete("/api/house/:id", hc.delete);

const port = process.env.PORT || 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );