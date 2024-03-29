const express = require('express');
const fs=require('fs');
const cors= require('cors');
const path = require('path');
const port = 3000;
const graphqlQuery = require('./graph_query.js');
const infoQuery = require('./info_query.js');

import('node-fetch').then(fetchModule => {
  const fetch = fetchModule.default;

  const app = express();

  app.use(cors());

  const API_KEY = process.env.GRAPH_API_KEY;
  const PRODUCTION_ENDPOINT = 'https://gateway-arbitrum.network.thegraph.com/api/${API_KEY}/subgraphs/id/6HzdSVrye3kxbwRmAZtDyWENGQQnTHnEucjm5Gen4NsL';
  const DEV_ENDPOINT = 'https://api.studio.thegraph.com/query/63555/cronos/version/latest';

  app.use(express.static('public'));

  app.get('/txn-data', async (req, res) => {
    try {
      const response = await fetch(PRODUCTION_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(graphqlQuery)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsondata = await response.json();
      console.log(JSON.stringify(jsondata, null, 2)); 
      res.send(jsondata.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
  });

  app.get('/info-data', async (req, res) => {
    try {
      const response = await fetch(DEV_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(infoQuery)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsondata = await response.json();
      console.log(JSON.stringify(jsondata, null, 2)); 
      res.send(jsondata.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data');
    }
  });

  app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'data.html'), 'utf8', (err, html) => {
      if (err) {
        res.status(500).send('Error loading page');
      } else {
        res.send(html);
      }
    });
  });

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    next();
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

}).catch(err => {
  console.error('Failed to load node-fetch module:', err);
});
