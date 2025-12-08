/*******
 * Account Routes
 */
//needed resources
const express = require("express")
const router = new express.Router()
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require("../utilities/account-validation")
const accountValidate = require("../utilities/account-validation")

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

// Route to handle logout
router.get("/logout", utilities.handleErrors(accountController.accountLogout))

/**
 * Route to build account management view (requires login)
 */
router.get("/", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountManagement))

// Route to build account update view
router.get("/update/:account_id", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountUpdate))

// Route to process account update
router.post("/update", 
  utilities.checkLogin,
  // Add validation here later
  utilities.handleErrors(accountController.updateAccount))

// Route to process password change
router.post("/update-password",
  utilities.checkLogin,
  // Add validation here later
  utilities.handleErrors(accountController.updatePassword))

// Route to build account update view
router.get("/update/:account_id", utilities.checkLogin, utilities.handleErrors(accountController.buildAccountUpdate))

// Route to process account update
router.post("/update", 
  utilities.checkLogin,
  accountValidate.updateAccountRules(),
  accountValidate.checkUpdateData,
  utilities.handleErrors(accountController.updateAccount))

// Route to process password change
router.post("/update-password",
  utilities.checkLogin,
  accountValidate.updatePasswordRules(),
  accountValidate.checkPasswordData,
  utilities.handleErrors(accountController.updatePassword))


  module.exports = router;