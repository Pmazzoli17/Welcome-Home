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

  // index route loads view.html(mainPage.html)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

  // cms route loads cms.html (searchPage.html)
  app.get("/searchPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/searchPage.html"));
  });

  // blog route loads blog.html
  // mainPage route loads mainPage.html
  app.get("/mainPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mainPage.html"));
  });

  // authors route loads author-manager.html(breweryPage.html)

  app.get("/teamPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/teamPage.html"));

  app.get("/breweryPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/breweryPage.html"));
  });

  app.get("/neighborhoodPage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/neighborhoodPage.html"));

  });

};