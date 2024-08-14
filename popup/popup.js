document.addEventListener("DOMContentLoaded", function () {
  // Get references to the buttons
  const pipedButton = document.getElementById("pipedButton");
  const leetcodeButton = document.getElementById("leetcodeButton");
  const todoButton = document.getElementById("todoButton");
  const switchElement = document.getElementById('toggleSwitch');
  switchElement.addEventListener('change', () => {
    pipedButton.style.display = switchElement.checked ? 'block' : 'none';
  });

  pipedButton.addEventListener('click', () => {
    chrome.tabs.update({ url: "https://piped.video" });
  });
  leetcodeButton.addEventListener("click", function () {
    chrome.tabs.update({ url: "https://leetcode.com/problemset" });
  });
  todoButton.addEventListener("click", function () {
    chrome.tabs.update({ url: "https://to-do.microsoft.com" });
  });
});