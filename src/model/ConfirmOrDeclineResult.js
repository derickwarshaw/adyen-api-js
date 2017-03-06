/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 18
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.ConfirmOrDeclineResult = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ConfirmOrDeclineResult model module.
   * @module model/ConfirmOrDeclineResult
   * @version 1.18.0
   */

  /**
   * Constructs a new <code>ConfirmOrDeclineResult</code>.
   * @alias module:model/ConfirmOrDeclineResult
   * @class
   * @param pspReference {String} the unique identifier assigned to this modification. This reference is the pspReference of the payout.
   * @param response {String} In case of success, it is payout-confirm-received / payout-decline-received. In case of an error, an informational message is returned.
   */
  var exports = function(pspReference, response) {
    var _this = this;

    _this['pspReference'] = pspReference;
    _this['response'] = response;
  };

  /**
   * Constructs a <code>ConfirmOrDeclineResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConfirmOrDeclineResult} obj Optional instance to populate.
   * @return {module:model/ConfirmOrDeclineResult} The populated <code>ConfirmOrDeclineResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pspReference')) {
        obj['pspReference'] = ApiClient.convertToType(data['pspReference'], 'String');
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ApiClient.convertToType(data['response'], 'String');
      }
    }
    return obj;
  }

  /**
   * the unique identifier assigned to this modification. This reference is the pspReference of the payout.
   * @member {String} pspReference
   */
  exports.prototype['pspReference'] = undefined;
  /**
   * In case of success, it is payout-confirm-received / payout-decline-received. In case of an error, an informational message is returned.
   * @member {String} response
   */
  exports.prototype['response'] = undefined;


  /**
   * Returns the unique identifier assigned to this modification. This reference is the pspReference of the payout.
   * @return {String}
   */
  exports.prototype.getPspReference = function() {
    return this['pspReference'];
  }

  /**
   * Sets the unique identifier assigned to this modification. This reference is the pspReference of the payout.
   * @param {String} pspReference the unique identifier assigned to this modification. This reference is the pspReference of the payout.
   */
  exports.prototype.setPspReference = function(pspReference) {
    this['pspReference'] = pspReference;
  }


  /**
   * Returns In case of success, it is payout-confirm-received / payout-decline-received. In case of an error, an informational message is returned.
   * @return {String}
   */
  exports.prototype.getResponse = function() {
    return this['response'];
  }

  /**
   * Sets In case of success, it is payout-confirm-received / payout-decline-received. In case of an error, an informational message is returned.
   * @param {String} response In case of success, it is payout-confirm-received / payout-decline-received. In case of an error, an informational message is returned.
   */
  exports.prototype.setResponse = function(response) {
    this['response'] = response;
  }



  return exports;
}));

