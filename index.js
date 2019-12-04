var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.set('port', (process.env.PORT || 80));
app.use(bodyParser.json());
app.use(cors());

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'));
});

app.use('/', function (req, res) {
  const data = [
    {
      _id: 1,
      name: 'a'
    },
    {
      _id: 2,
      name: 'b'
    }
  ];

  res.json(data);
});
