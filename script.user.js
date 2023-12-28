// ==UserScript==
// @name         NamuNews Silent
// @namespace    kafka2412
// @version      0.0.1
// @description  Remove comment section in NamuNews
// @author       kafka2412
// @match        https://namu.news/article/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const collection = document.getElementsByClassName("sc-1gjql7g-0");
    collection[0].remove();
    // Your code here...
})();
