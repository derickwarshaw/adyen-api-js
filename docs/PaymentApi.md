# AdyenApiJs.PaymentApi

All URIs are relative to *https://pal-test.adyen.com/pal/servlet*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorise**](PaymentApi.md#authorise) | **POST** /Payment/v25/authorise | Creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later. While for cards an authorised payment can be captured later, non-card methods typically don&#39;t support this and will automatically capture as part of the authorisation.
[**authorise3d**](PaymentApi.md#authorise3d) | **POST** /Payment/v25/authorise3d | For an authenticated 3-D secure session, creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later.
[**cancel**](PaymentApi.md#cancel) | **POST** /Payment/v25/cancel | Cancels a payment authorisation
[**cancelrefund**](PaymentApi.md#cancelrefund) | **POST** /Payment/v25/cancelOrRefund | Disable a stored payment detail
[**capture**](PaymentApi.md#capture) | **POST** /Payment/v25/capture | Captures a payment authorisation
[**refund**](PaymentApi.md#refund) | **POST** /Payment/v25/refund | Refunds a payment


<a name="authorise"></a>
# **authorise**
> PaymentResult authorise(paymentRequest)

Creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later. While for cards an authorised payment can be captured later, non-card methods typically don&#39;t support this and will automatically capture as part of the authorisation.

Creates a payment authorisation

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PaymentApi();

var paymentRequest = new AdyenApiJs.PaymentRequest(); // PaymentRequest | The Payment Request

apiInstance.authorise(paymentRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentRequest** | [**PaymentRequest**](PaymentRequest.md)| The Payment Request | 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="authorise3d"></a>
# **authorise3d**
> PaymentResult authorise3d(paymentRequest3d)

For an authenticated 3-D secure session, creates a payment with a unique reference (pspReference) and attempts to obtain an authorisation hold, which can be \&quot;captured\&quot; or \&quot;cancelled\&quot; later.

Completes a 3-D Secure payment authorisation

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PaymentApi();

var paymentRequest3d = new AdyenApiJs.PaymentRequest3d(); // PaymentRequest3d | The Payment Request

apiInstance.authorise3d(paymentRequest3d).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentRequest3d** | [**PaymentRequest3d**](PaymentRequest3d.md)| The Payment Request | 

### Return type

[**PaymentResult**](PaymentResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancel"></a>
# **cancel**
> ModificationResult cancel(modificationRequest)

Cancels a payment authorisation

Cancels the authorisation hold on a payment, returning a unique reference for this request.

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PaymentApi();

var modificationRequest = new AdyenApiJs.ModificationRequest(); // ModificationRequest | The Modification Request

apiInstance.cancel(modificationRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modificationRequest** | [**ModificationRequest**](ModificationRequest.md)| The Modification Request | 

### Return type

[**ModificationResult**](ModificationResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelrefund"></a>
# **cancelrefund**
> ModificationResult cancelrefund(modificationRequest)

Disable a stored payment detail

Performs a \&quot;cancel\&quot; on a payment if it has not yet been captured or a \&quot;refund\&quot; if it has already been captured. This is useful when it is not certain if the payment has been captured yet (e.g. when using auto-capture).

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PaymentApi();

var modificationRequest = new AdyenApiJs.ModificationRequest(); // ModificationRequest | The Modification Request

apiInstance.cancelrefund(modificationRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modificationRequest** | [**ModificationRequest**](ModificationRequest.md)| The Modification Request | 

### Return type

[**ModificationResult**](ModificationResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="capture"></a>
# **capture**
> ModificationResult capture(modificationRequest)

Captures a payment authorisation

Captures the authorisation hold on a payment, returning a unique reference for this request. Usually the full authorisation amount is captured, however it&#39;s also possible to capture a smaller amount which results in cancelling the remaining authorisation balance. Payment methods which automatically capture as part of authorisation don&#39;t need to be captured, but submitting a capture request on these transactions will not result in double charges.

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PaymentApi();

var modificationRequest = new AdyenApiJs.ModificationRequest(); // ModificationRequest | The Modification Request

apiInstance.capture(modificationRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modificationRequest** | [**ModificationRequest**](ModificationRequest.md)| The Modification Request | 

### Return type

[**ModificationResult**](ModificationResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="refund"></a>
# **refund**
> ModificationResult refund(modificationRequest)

Refunds a payment

Refunds a payment which has previously been captured, returning a unique reference for this request. Refunding can be done on the full captured amount or a partial amount. Multiple (partial) refunds will be accepted as long as their sum doesn&#39;t exceed the captured amount. Payments which have been authorised, but not captured cannot be refunded, use the \&quot;cancel\&quot; method instead.

### Example
```javascript
var AdyenApiJs = require('adyen-api-js');
var defaultClient = AdyenApiJs.ApiClient.default;

// Configure HTTP basic authorization: auth
var auth = defaultClient.authentications['auth'];
auth.username = 'YOUR USERNAME';
auth.password = 'YOUR PASSWORD';

var apiInstance = new AdyenApiJs.PaymentApi();

var modificationRequest = new AdyenApiJs.ModificationRequest(); // ModificationRequest | The Modification Request

apiInstance.refund(modificationRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modificationRequest** | [**ModificationRequest**](ModificationRequest.md)| The Modification Request | 

### Return type

[**ModificationResult**](ModificationResult.md)

### Authorization

[auth](../README.md#auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

