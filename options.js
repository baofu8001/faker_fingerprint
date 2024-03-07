// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'saveOptions') {
      // Save the options to the browser's storage
      // ...
    } else if (message.action === 'generateRandom') {
      // Generate random values for each fingerprint item
      // ...
    } else if (message.action === 'generateFromSeed') {
      // Generate values for each fingerprint item based onseed
      // ...
    }
  });
  
  // Send a message to the content script to modify the fingerprint
  function modifyFingerprint() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'modifyFingerprint' });
    });
  }
  
  // Add event listeners to the buttons on the options page
  document.getElementById('saveButton').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: 'saveOptions' });
  });
  
  document.getElementById('randomButton').addEventListener('click', function () {
    chrome.runtime.sendMessage({ action: 'generateRandom' });
  });
  
  document.getElementById('seedButton').addEventListener('click', function () {
    const seed = prompt('Enter seed:');
    if (seed) {
      chrome.runtime.sendMessage({ action: 'generateFromSeed', seed: seed });
    }
  });