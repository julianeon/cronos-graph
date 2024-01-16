# About

This is an express app to display data about the Cronos token, using the Graph.

The relevant code is in server.js and public/data.html.

Right now it runs a query (viewable in [graph_query.js](https://github.com/julianeon/cronos-graph/blob/main/graph_query.js)) showing the contents of one transaction.

There are 2 working queries, as given in graph_query.js and alt_query.js.

![screen output](cronos_graph.png)

# How to Run

Note: you'll need an API key from the Graph. You'll also need to change the part of the code where I specify the API key in server.js.

You can run the app locally by running these commands:

`cd (directory)`

`npm install`

`npm start`

Go to localhost:3000 and you should see the data displayed.
