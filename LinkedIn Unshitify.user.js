// ==UserScript==
// @name         LinkedIn Unshitify
// @namespace    https://github.com/AidanSpeakss/linkedin-unshitify
// @version      0.2
// @description  try to take over the world!
// @author       You, Me, Bob, Your Uncle, Everyone Ideally
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
    //How-To: Simply comment out/in features you want or don't want with the // at the beginning of the line. Adding the // turns them off. Removing the // turns them back on.

    //Removes social counters from posts (likes, reactions, comment amount, etc), this also means you will have to click the comment button if you want to make a comment or view comments on posts where the comments aren't already visible
    newStyles.innerText += ".social-details-social-counts__item, .social-details-social-counts__item, .social-details-reactors-facepile, .social-details-reactors-facepile { display: none !important}"

    //Removes social counters from comments (likes, reactions, etc) while keeping the button to reply to comments
    newStyles.innerText += ".comments-comment-social-bar__reactions-count--cr, .comments-comment-social-bar__replies-count--cr { display: none !important}"

    //Removes Feed Entirely - Can Break Things:
    //newStyles.innerText += ".feed-new-update-pill__new-update-button, .feed-right-rail, .feed-shared-update-v2, .nav-item__badge--doughnut, .feed-shared-news-module, .feed-follows-module { display: none !important; }"

    //Removed Feed Entirely - Does Not Break As Many Things:
    //newStyles.innerText += ".feed-shared-update-v2 { display: none !important; }"

    //Removes profile view stats
    newStyles.innerText += ".feed-identity-module__widgets { display: none !important}"

    //Removes sidebar with news and games
    newStyles.innerText += "#feed-news-module { display: none !important}"

    //Removes AI comment suggestions
    newStyles.innerText += ".feed-shared-coach-prompt__multi-suggestion-cta { display: none !important}"

    //Removes liked and commented on posts from feed (only showing POSTS from people you follow) - cant get to work right, feel free to improve with a fork and merge it
    //newStyles.innerText += ".feed-shared-update-v2:has(> div.update-components-header)  { display: none !important}"

    //Removes follow button
    newStyles.innerText += ".follow { display: none !important}"

    //Removes analytics from your profile if you have creator mode turned on
    newStyles.innerText += "section:has(> div#insights) { display: none !important}"

    //Removes analytics from your posts if you have creator mode turned on
    newStyles.innerText += ".content-analytics-entry-point { display: none !important}"

    //Removes your follower and connection count when viewing your page
    newStyles.innerText += ".pvs-header__optional-link a[href='https://www.linkedin.com/feed/followers/'], a[href='/mynetwork/network-manager/people-follow/followers/'], a[href='/mynetwork/invite-connect/connections/'] { display: none !important}"

    //Removes custom buttons from peoples pages
    newStyles.innerText += ".update-components-actor__sub-description-button { display: none !important}"

    //Remove "premium features" from the sidebar
    newStyles.innerText += ".feed-identity-module__anchored-widget--premium-access { display: none !important}"

document.head.appendChild(newStyles);
}

unshitify();
})();
