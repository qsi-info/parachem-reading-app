/**
 * ReadingsController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {
    
  
  cristallisation: function (req, res) {
  	return res.view();
  },

  stdp: function (req, res) {
  	return res.view();
  },

  classeurhuile: function (req, res) {
  	return res.view();
  },

  chaudieres: function (req, res) {
    return res.view();
  },

  hydrogene: function (req, res) {
    return res.view();
  },

  verifications: function (req, res) {
    return res.view();
  },

  pompes: function (req, res) {
    return res.view();
  },

  analysesEau: function (req, res) {
    return res.view();
  },

  verificationsQuotidiennes: function (req, res) {
    return res.view();
  },
  
  etatsbh: function (req, res) {
      return res.view();
  },


  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ReadingsController)
   */
  _config: {}

  
};
