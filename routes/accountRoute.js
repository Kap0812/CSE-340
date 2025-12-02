/*******
 * Account Routes
 */
//needed resources
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

/**
 * Deliver Login View 
 */
router.get("/login", utilities.handleErrors(accountController.buildLogin))


/**
 * process login 
 */

router.post("/login", regValidatel.loginRules(),regValidate.checkLoginData, utilities.handleErrors(accountController.accountLogin))

/**
 * Deliver Registration view
 */
router.get("/register", utilities.handleErrors(accountController.buildRegister))

/**
 * process registration
 */
router.post('/register', utilities.handleErrors(accountController.registerAccount))

module.exports = router;