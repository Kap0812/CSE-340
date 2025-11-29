// Step 1: Create route in server.js or create new errorRoute.js
// routes/errorRoute.js
const express = require("express");
const router = new express.Router();
const errorController = require("../controllers/errorController");
const utilities = require("../utilities/");

// Route to trigger intentional error
router.get("/trigger", utilities.handleErrors(errorController.triggerError));

module.exports = router;

// ==========================================

// Step 2: Create controller
// controllers/errorController.js
const errorCont = {};

/* ***************************
 *  Trigger intentional error
 * ************************** */
errorCont.triggerError = async function (req, res, next) {
  // Intentionally cause a 500 error
  throw new Error('Intentional 500-type error for testing purposes');
};

module.exports = errorCont;

// ==========================================

// Step 3: Update server.js to include error route
// Add to server.js with other routes:
const errorRoute = require("./routes/errorRoute");
app.use("/error", errorRoute);

// ==========================================

// Step 4: Update footer partial
// views/partials/footer.ejs - add this link:
// <a href="/error/trigger">Trigger Error</a>