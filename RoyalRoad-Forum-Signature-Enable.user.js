// ==UserScript==
// @name			RoyalRoad Forum Signature Enable
// @namespace		RoyalRoad Forum Signature Enable
// @version			0.4
// @description		Enable signature when posting on RoyalRoad Forum.
// @author			Aapjuh
// @icon			https://raw.githubusercontent.com/Aapjuh/RoyalRoad-Forum-Signature-Enable/main/RR-logo.png
// @supportURL		https://github.com/Aapjuh/RoyalRoad-Forum-Signature-Enable/issues
// @homepageURL		https://github.com/Aapjuh/RoyalRoad-Forum-Signature-Enable
// @downloadURL		https://github.com/Aapjuh/RoyalRoad-Forum-Signature-Enable/raw/main/RoyalRoad-Forum-Signature-Enable.user.js
// @updateURL		https://github.com/Aapjuh/RoyalRoad-Forum-Signature-Enable/raw/main/RoyalRoad-Forum-Signature-Enable.user.js
// @match			https://www.royalroad.com/forums/postreply/*
// @match			https://www.royalroad.com/forums/newthread/*
// @match			https://www.royalroad.com/forums/thread/*
// @grant			none
// ==/UserScript==
/* globals jQuery, $, waitForKeyElements */
//
(function() {
    'use strict';

    //--- Wait for the document to be ready
    $(document).ready(function() {
        // Enable signature
        $("label.mt-checkbox input[name='Signature']").prop('checked', true);
    });
})();
