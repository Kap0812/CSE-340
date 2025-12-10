// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")
const invValidate = require("../utilities/inventory-validation")

// Route to build inventory by classification view (PUBLIC - no login required)
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));

// Route to build inventory item detail view (PUBLIC - no login required)
router.get("/detail/:invId", utilities.handleErrors(invController.buildByInventoryId));

// Route to build inventory management view (PROTECTED)
router.get("/", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.buildManagement));

// Route to build add classification view (PROTECTED)
router.get("/add-classification", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.buildAddClassification));

// Route to process add classification (POST) (PROTECTED)
router.post("/add-classification", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.addClassification));

// Route select inv item activity (PROTECTED)
router.get("/getInventory/:classification_id", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.getInventoryJSON))

// Route to build add inventory view (PROTECTED)
router.get("/add-inventory", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.buildAddInventory));

// Route to process add inventory (POST) (PROTECTED)
router.post(
  "/add-inventory",
  utilities.checkLogin,
  utilities.checkAccountType,
  invValidate.newInventoryRules(),
  invValidate.checkInventoryData,
  utilities.handleErrors(invController.addInventory)
);

// Route to build inventory edit view (PROTECTED)
router.get("/edit/:inv_id", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.editInventoryView))

// Route to process inventory update (POST) (PROTECTED)
router.post(
  "/update/",
  utilities.checkLogin,
  utilities.checkAccountType,
  invValidate.newInventoryRules(),
  invValidate.checkUpdateData,
  utilities.handleErrors(invController.updateInventory)
)

// Route to build delete confirmation view (PROTECTED)
router.get("/delete/:inv_id", 
  utilities.checkLogin, 
  utilities.checkAccountType, 
  utilities.handleErrors(invController.deleteInventoryView))

// Route to process inventory deletion (POST) (PROTECTED)
router.post("/delete/",
  utilities.checkLogin,
  utilities.checkAccountType,
  utilities.handleErrors(invController.deleteInventory)
)

module.exports = router;