// ==UserScript==
// @name         NamuNews Silent
// @namespace    kafka2412
// @version      0.0.2
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
    // var removed = false;

    let timer = setInterval(function(){ 
        const collection = document.getElementsByClassName("sc-1gjql7g-0");
        // console.log(collection, removed);
        if (collection.length > 0) {
            collection[0].remove();    
            // removed = true;
            clearInterval(timer);
        }
        // console.log(collection, removed);
    },500); //500ms

})();
