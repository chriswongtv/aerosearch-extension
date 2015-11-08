// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
  console.log(encodeURIComponent(info.srcUrl));
  var _url = 'http://aerosearch.elasticbeanstalk.com/confirm?url=' + encodeURIComponent(info.srcUrl);
  chrome.tabs.create({ url: _url });
};

chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "AeroSearch!", "contexts": ["image"], "id": "parent"});
});