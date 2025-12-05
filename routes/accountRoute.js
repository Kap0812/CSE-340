/*******
 * Account Routes
 */
//needed resources
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require("../utilities/account-validation")

/**
 * Deliver Login View 
 */
router.get("/login", utilities.handleErrors(accountController.buildLogin))

/**
 * Deliver Registration view
 */
router.get("/register", utilities.handleErrors(accountController.buildRegister))

/**
 * Process registration
 */
router.post(
  '/register',
  regValidate.registrationRules(),
  regValidate.checkRegData,
  utilities.handleErrors(accountController.registerAccount)
)

/**
 * Process login 
 */
router.post(
  "/login",
  regValidate.loginRules(),
  regValidate.checkLoginData,
  utilities.handleErrors(accountController.accountLogin)
)

/**
 * Route to build account management view (requires login)
 */
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountManagement))

module.exports = router;