// ==UserScript==
// @name		RoyalRoad Forum Signature Enable
// @namespace	RoyalRoad Forum Signature Enable
// @version		0.1
// @description	Enable signature when posting on RoyalRoad Forum.
// @author		Aapjuh
// @icon        https://raw.githubusercontent.com/nomomo/Twitch-Auto-Max-Quality/master/images/logo.png
// @supportURL  https://github.com/nomomo/Twitch-Auto-Max-Quality/issues
// @homepageURL https://github.com/nomomo/Twitch-Auto-Max-Quality/
// @downloadURL https://raw.githubusercontent.com/nomomo/Twitch-Auto-Max-Quality/master/Twitch-Mobile-Web-Source-Quality.user.js
// @updateURL   https://raw.githubusercontent.com/nomomo/Twitch-Auto-Max-Quality/master/Twitch-Mobile-Web-Source-Quality.user.js
// @match		https://www.royalroad.com/forums/postreply/*
// @match		https://www.royalroad.com/forums/newthread/*
// @match		https://www.royalroad.com/forums/thread/*
// @icon		https://www.google.com/s2/favicons?sz=64&domain=royalroad.com
// @grant		none
// ==/UserScript==
/* globals $ */

// If the page does not jump back up to the top or a comment/post change the timeout from 1000 to something higher (1000=1sec,2000=2sec etc.)
(function() {
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
	}, 1000);
})();