// ==UserScript==
// @name         LinkedIn Unshitify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        https://www.linkedin.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// @require http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

(function() {
    'use strict';
function unshitify(){
let newStyles = document.createElement('style');
    //Removes Social Counter (Likes, Amount of Comments, Etc)
    newStyles.innerText = ".social-details-social-counts__social-proof-container { display: none !important;}"
    newStyles.innerText += ".social-details-social-counts { display: none !important}"

    //Removes Feed Entirely:
    //newStyles.innerText += ".feed-new-update-pill__new-update-button, .feed-right-rail, .feed-shared-update-v2, .nav-item__badge--doughnut, .feed-shared-news-module, .feed-follows-module { display: none !important; }"

    //Less Fucked Removed Feed Entirely:
    //newStyles.innerText += ".feed-shared-update-v2 { display: none !important; }"

    //Removes profile view stats on sidebar
    newStyles.innerText += ".feed-identity-module__widgets { display: none !important}"

    //Removes sidebar with news and games
    newStyles.innerText += "#feed-news-module { display: none !important}"

    //Removes ai comment suggestions
    newStyles.innerText += ".feed-shared-coach-prompt__multi-suggestion-cta { display: none !important}"

    //Removes liked and commented on posts from feed (only showing POSTS from people you follow) - cant get to work write, feel free to improve with a fork and merge it
    //newStyles.innerText += ".feed-shared-update-v2:has(> div.update-components-header)  { display: none !important}"

document.head.appendChild(newStyles);
}

unshitify();
    // Your code here...
})();
