/**
 * Adyen api
 * Operations about payments, recurring and payout
 *
 * OpenAPI spec version: 25
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
    define(['ApiClient', 'model/Amount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Amount'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.ModificationRequest = factory(root.AdyenApiJs.ApiClient, root.AdyenApiJs.Amount);
  }
}(this, function(ApiClient, Amount) {
  'use strict';




  /**
   * The ModificationRequest model module.
   * @module model/ModificationRequest
   * @version 1.25.1
   */

  /**
   * Constructs a new <code>ModificationRequest</code>.
   * @alias module:model/ModificationRequest
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ModificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModificationRequest} obj Optional instance to populate.
   * @return {module:model/ModificationRequest} The populated <code>ModificationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
      if (data.hasOwnProperty('modificationAmount')) {
        obj['modificationAmount'] = Amount.constructFromObject(data['modificationAmount']);
      }
      if (data.hasOwnProperty('authorisationCode')) {
        obj['authorisationCode'] = ApiClient.convertToType(data['authorisationCode'], 'String');
      }
      if (data.hasOwnProperty('originalReference')) {
        obj['originalReference'] = ApiClient.convertToType(data['originalReference'], 'String');
      }
      if (data.hasOwnProperty('merchantAccount')) {
        obj['merchantAccount'] = ApiClient.convertToType(data['merchantAccount'], 'String');
      }
      if (data.hasOwnProperty('additionalData')) {
        obj['additionalData'] = ApiClient.convertToType(data['additionalData'], Object);
      }
    }
    return obj;
  }

  /**
   * the reference assigned to this modification
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;
  /**
   * @member {module:model/Amount} modificationAmount
   */
  exports.prototype['modificationAmount'] = undefined;
  /**
   * the authorisation code of the payment (only required for the \"authoriseReferral\" method)
   * @member {String} authorisationCode
   */
  exports.prototype['authorisationCode'] = undefined;
  /**
   * the pspreference of the payment to modify
   * @member {String} originalReference
   */
  exports.prototype['originalReference'] = undefined;
  /**
   * the merchant account which will be used to process the payment
   * @member {String} merchantAccount
   */
  exports.prototype['merchantAccount'] = undefined;
  /**
   * a map of name/value pairs for passing in additional / industry-specific data
   * @member {Object} additionalData
   */
  exports.prototype['additionalData'] = undefined;


  /**
   * Returns the reference assigned to this modification
   * @return {String}
   */
  exports.prototype.getReference = function() {
    return this['reference'];
  }

  /**
   * Sets the reference assigned to this modification
   * @param {String} reference the reference assigned to this modification
   */
  exports.prototype.setReference = function(reference) {
    this['reference'] = reference;
  }


  /**
   * @return {module:model/Amount}
   */
  exports.prototype.getModificationAmount = function() {
    return this['modificationAmount'];
  }

  /**
   * @param {module:model/Amount} modificationAmount
   */
  exports.prototype.setModificationAmount = function(modificationAmount) {
    this['modificationAmount'] = modificationAmount;
  }


  /**
   * Returns the authorisation code of the payment (only required for the \"authoriseReferral\" method)
   * @return {String}
   */
  exports.prototype.getAuthorisationCode = function() {
    return this['authorisationCode'];
  }

  /**
   * Sets the authorisation code of the payment (only required for the \"authoriseReferral\" method)
   * @param {String} authorisationCode the authorisation code of the payment (only required for the \"authoriseReferral\" method)
   */
  exports.prototype.setAuthorisationCode = function(authorisationCode) {
    this['authorisationCode'] = authorisationCode;
  }


  /**
   * Returns the pspreference of the payment to modify
   * @return {String}
   */
  exports.prototype.getOriginalReference = function() {
    return this['originalReference'];
  }

  /**
   * Sets the pspreference of the payment to modify
   * @param {String} originalReference the pspreference of the payment to modify
   */
  exports.prototype.setOriginalReference = function(originalReference) {
    this['originalReference'] = originalReference;
  }


  /**
   * Returns the merchant account which will be used to process the payment
   * @return {String}
   */
  exports.prototype.getMerchantAccount = function() {
    return this['merchantAccount'];
  }

  /**
   * Sets the merchant account which will be used to process the payment
   * @param {String} merchantAccount the merchant account which will be used to process the payment
   */
  exports.prototype.setMerchantAccount = function(merchantAccount) {
    this['merchantAccount'] = merchantAccount;
  }


  /**
   * Returns a map of name/value pairs for passing in additional / industry-specific data
   * @return {Object}
   */
  exports.prototype.getAdditionalData = function() {
    return this['additionalData'];
  }

  /**
   * Sets a map of name/value pairs for passing in additional / industry-specific data
   * @param {Object} additionalData a map of name/value pairs for passing in additional / industry-specific data
   */
  exports.prototype.setAdditionalData = function(additionalData) {
    this['additionalData'] = additionalData;
  }



  return exports;
}));


