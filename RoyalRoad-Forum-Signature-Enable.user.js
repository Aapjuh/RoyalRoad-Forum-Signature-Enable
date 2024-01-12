// ==UserScript==
// @name			RoyalRoad Forum Signature Enable
// @namespace		RoyalRoad Forum Signature Enable
// @version			0.2
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
// @require			http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// ==/UserScript==
//
// If the page does not jump back up to the top or a comment/post change the timeout from 0 to something higher (1000=1sec,2000=2sec etc.)
$(document).ready(function() {
	'use strict';
	// original scroll position
	var scrollPos;
	scrollPos = $(window).scrollTop();

	// Enable signature (forced scroll down)
	var $RRPostSigCheckbox = document.querySelector('.mt-checkbox');
	if ($RRPostSigCheckbox) {
		$RRPostSigCheckbox.click()
	}

	// back to original scoll position
	setTimeout(function() {
		$(window).scrollTop(scrollPos)
	}, 0); // <--- Timeout timer, Change this if it doesn't scroll back to where the page should have been.
})();
