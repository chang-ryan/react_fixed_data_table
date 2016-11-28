# HYFN8 Front End Code Challenge

### Prompt

> Using React, you need to create a Frontend App that will display data coming from 2 separate APIs. Ad Objects API and Ads Metrics API. The data will be structured in EXCEL like format as a table with cells. The first column of the table will be locked and not scrollable to the left or right. The rest will be scrollable and can scroll under the first one. The table area must have a min-width of 500px.

### Docs

The app can be started by running `npm install` and then `npm build`. I ran the React app on a webpack-dev-server.

### Discussion

This app uses React and Redux to build a table that receives data from two APIs.

The APIs are fetched with axios in actions/index.js. These actions are then fired on componentWillMount() in the AdModule component. State is updated via two separate reducers for ad objects and ad metrics. AdModule uses these two states to supply the table with data.

The app was manually supplied with data via this.state because the api does not exist. However, functionality for making API requests have been built accordingly.

One problem I came across was difficulty in making separate components for the ad objects and ad metrics. Using a separate component to render the the ad objects and ad metrics does not seem to work with the fixed-data-table API. For example, if I import ad_object_list into ad_module, <AdObjectList /> will not render properly in the AdModule component. (see ad_object_list.js)

In order to align ad objects with ad metrics according to their remote id, I simply sorted the table by remote_id as the default sort index. Further sorting can be added to the component if needed, see [https://facebook.github.io/fixed-data-table/example-sort.html](https://facebook.github.io/fixed-data-table/example-sort.html).
