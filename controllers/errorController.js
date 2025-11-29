const errorCont = {};

/* ***************************
 *  Trigger intentional error
 * ************************** */
errorCont.triggerError = async function (req, res, next) {
  // Intentionally cause a 500 error
  throw new Error('Intentional 500-type error for testing purposes');
};

module.exports = errorCont;