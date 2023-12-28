// ==UserScript==
// @name         NamuNews Silent
// @namespace    kafka2412
// @version      0.0.3
// @description  Remove comment section in NamuNews
// @author       kafka2412
// @supportURL   https://github.com/kafka2412/NamuNews-Slient/discussions
// @downloadURL  https://github.com/kafka2412/NamuNews-Slient/releases/latest/download/NamuNewsSilent.user.js
// @updateURL    https://github.com/kafka2412/NamuNews-Slient/releases/latest/download/NamuNewsSilent.meta.js
// @match        https://namu.news/article/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    let timer = setInterval(function(){ 
        const collection = document.getElementsByClassName("am7kwa-1");
        // console.log(collection);
        if (collection.length > 0) {
            const parent = document.getElementsByClassName("am7kwa-0");
            parent[0].remove();
            // clearInterval(timer);
        }
        // console.log(collection);
    },2000); //1000ms

})();
