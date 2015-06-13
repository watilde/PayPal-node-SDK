/* Copyright 2015 PayPal */
"use strict";

var configuration = require('./configure');
var api = require('./api');

module.exports = function () {

    function configure(options) {
        api.configure(options);
    }

    function generateToken(config, cb) {
        api.generateToken(config, cb);
    }

    function saveToken(client_id, access_token) {
        api.saveToken(client_id, access_token);
    }

    function getTokenPersist() {
        return api.getTokenPersist();
    }

    return {
        version: configuration.sdkVersion,
        configure: configure,
        configuration: configuration.default_options,
        generateToken: generateToken,
        saveToken: saveToken,
        getTokenPersist: getTokenPersist,
        payment: require('./resources/Payment')(),
        sale: require('./resources/Sale')(),
        refund: require('./resources/Refund')(),
        authorization: require('./resources/Authorization')(),
        capture: require('./resources/Capture')(),
        order: require('./resources/Order')(),
        payout: require('./resources/Payout')(),
        payoutItem: require('./resources/PayoutItem')(),
        billingPlan: require('./resources/BillingPlan')(),
        billingAgreement: require('./resources/BillingAgreement')(),
        creditCard: require('./resources/CreditCard')(),
        invoice: require('./resources/Invoice')(),
        openIdConnect: require('./resources/OpenIdConnect')(),
        webProfile: require('./resources/WebProfile')(),
        notification: require('./resources/Notification')(),
        //entries below are deprecated but provided for compatibility with 0.* versions
        generate_token: generateToken,
        billing_plan: require('./resources/BillingPlan')(),
        billing_agreement: require('./resources/BillingAgreement')(),
        credit_card: require('./resources/CreditCard')(),
        openid_connect: require('./resources/OpenIdConnect')()
    };
};
