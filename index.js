const express = require('express');
const session = require('express-session')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const flash = require('express-flash')
const shoeApiRoutes = require('./api.js');
const Models = require('./models')
const mongoUrl = process.env.MONGO_DB_URL || 'mongodb://localhost/shoe';
const models = Models(mongoUrl);


const shoeRoutes = shoeApiRoutes(models);
const app = express();


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

 app.use(express.static('public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 * 30 }}));
app.use(flash());

// start Routes
app.get('/api/shoes', shoeRoutes.index);
app.post('/api/shoes', shoeRoutes.shoes);
app.get('/api/shoes/brand/:brandname', shoeRoutes.findbrand);
app.get('/api/shoes/size/:size', shoeRoutes.Sizes);
app.get('/api/shoes/brand/:brandname/size/:size', shoeRoutes.brandSize);
app.post('/api/shoes/sold/:id', shoeRoutes.soldid);

//start the server
app.set('port',(process.env.PORT || 8000) );

app.listen(app.get('port'), function(){
  console.log("Web app started on port: ", app.get('port'));
});
