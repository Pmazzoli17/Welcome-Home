// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads mainPage.html)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

  // searchPage route loads searchPage.html
  app.get("/searchPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/searchPage.html"));
  });

  // mainPage route loads mainPage.html
  app.get("/mainPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

  // teamPage route loads teamPage.html)
  app.get("/teamPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/teamPage.html"));
  });  


  // neighborhoodPage route loads neighborhoodPage.html)
  app.get("/neighborhoodPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/neighborhoodPage.html"));
  });

    app.get("/resultsPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resultsPage.html"));
  });

};