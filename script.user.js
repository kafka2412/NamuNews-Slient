// ==UserScript==
// @name         NamuNews Silent
// @namespace    kafka2412
// @version      1.0.0
// @description  Remove comment section in NamuNews
// @author       kafka2412
// @supportURL   https://github.com/kafka2412/NamuNews-Slient/discussions
// @downloadURL  https://github.com/kafka2412/NamuNews-Slient/releases/latest/download/NamuNewsSilent.user.js
// @updateURL    https://github.com/kafka2412/NamuNews-Slient/releases/latest/download/NamuNewsSilent.meta.js
// @match        https://namu.news/article/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    // Referred https://stackoverflow.com/a/32338471
    waitForKeyElements (
        'div.am7kwa-0', processDivComments
    );

    waitForKeyElements (
        'div.qsonk5-1', processDivCommentsNum
    );
    
    function processDivComments (element) {
        // console.log('catched!')
        element.remove();
    }

    function processDivCommentsNum (element) {
        element.remove();
    }
})();
