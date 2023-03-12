var express = require('express'); 
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public')); 
app.use('/', function(req, res, next) { 
    console.log('Request Url: ' + req.url); 
    next(); 
});

app.get('/', function(req, res) { 
    res.render('index');
});

app.get('/person/:id', (req, res) => {
    const id = req.params.id;
    res.render('person', { id });
  });

  let data = [
    { id: 1, nombre: "Hugo", apellido: "Estrada Ramirez", edad: 18},
    { id: 2, nombre: "Estrella", apellido: "Perez Suarez", edad: 17},
    { id: 1, nombre: "Diana", apellido: "Contreras Morales", edad: 18},
  ];

  app.get('/personas', function (req, res) {
    res.render('personas', {data});
  });

app.listen(port);