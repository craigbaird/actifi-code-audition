const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/dist/actifi-code-audition'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/actifi-code-audition/index.html'));
});

app.listen(process.env.PORT || 8080, () => {
    console.log('App listening on port 8080');
});

