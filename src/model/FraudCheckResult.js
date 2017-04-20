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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AdyenApiJs) {
      root.AdyenApiJs = {};
    }
    root.AdyenApiJs.FraudCheckResult = factory(root.AdyenApiJs.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FraudCheckResult model module.
   * @module model/FraudCheckResult
   * @version 1.25.1
   */

  /**
   * Constructs a new <code>FraudCheckResult</code>.
   * @alias module:model/FraudCheckResult
   * @class
   * @param name {String} the name of the risk check
   * @param accountScore {Number} the fraud score generated by the risk check
   * @param checkId {Number} the id of the risk check
   */
  var exports = function(name, accountScore, checkId) {
    var _this = this;

    _this['name'] = name;
    _this['accountScore'] = accountScore;
    _this['checkId'] = checkId;
  };

  /**
   * Constructs a <code>FraudCheckResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FraudCheckResult} obj Optional instance to populate.
   * @return {module:model/FraudCheckResult} The populated <code>FraudCheckResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('accountScore')) {
        obj['accountScore'] = ApiClient.convertToType(data['accountScore'], 'Number');
      }
      if (data.hasOwnProperty('checkId')) {
        obj['checkId'] = ApiClient.convertToType(data['checkId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the name of the risk check
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * the fraud score generated by the risk check
   * @member {Number} accountScore
   */
  exports.prototype['accountScore'] = undefined;
  /**
   * the id of the risk check
   * @member {Number} checkId
   */
  exports.prototype['checkId'] = undefined;


  /**
   * Returns the name of the risk check
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets the name of the risk check
   * @param {String} name the name of the risk check
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * Returns the fraud score generated by the risk check
   * @return {Number}
   */
  exports.prototype.getAccountScore = function() {
    return this['accountScore'];
  }

  /**
   * Sets the fraud score generated by the risk check
   * @param {Number} accountScore the fraud score generated by the risk check
   */
  exports.prototype.setAccountScore = function(accountScore) {
    this['accountScore'] = accountScore;
  }


  /**
   * Returns the id of the risk check
   * @return {Number}
   */
  exports.prototype.getCheckId = function() {
    return this['checkId'];
  }

  /**
   * Sets the id of the risk check
   * @param {Number} checkId the id of the risk check
   */
  exports.prototype.setCheckId = function(checkId) {
    this['checkId'] = checkId;
  }



  return exports;
}));


