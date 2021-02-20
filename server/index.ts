const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const config = require('./config.json');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/api/surveys/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const endpoint = `${config.survey_api_host}surveys/`;
  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    res.send(JSON.stringify(response.data));
  }).catch(error => {
    res.send(JSON.stringify(error), 400);
  });

});
app.get('/api/surveys/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const endpoint = `${config.survey_api_host}surveys/${req.params.id}`;
  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  }).then(response => {
    res.send(JSON.stringify(response.data));
  }).catch(error => {
    res.send(JSON.stringify(error), 400);
  });
});

app.get('/', express.static('public'))
app.listen(3001, () => console.log('Express server is running on localhost:3001'));