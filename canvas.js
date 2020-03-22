/* Function that removes the standard theme color from Canvas pages and replaces it with solid black */

function removeThemeColor()
{
  document.querySelector("[name='theme-color']").remove()
  var head = document.getElementsByTagName('HEAD')[0];
  var meta = document.createElement('meta');
  meta.setAttribute('name', 'theme-color');
  if(chrome.storage.sync.get(['themeToUse'], function(result) {
      console.log('Value currently is ' + result.themeToUse);
    }) == "0")
  {
    meta.content = "#000";
  }
  else
  {
    meta.content = "#303640";
  }
  head.appendChild(meta);

}

function setStyleSheet()
{
  var root = document.documentElement;

  if(  chrome.storage.sync.get(['themeToUse'], function(result) {
      console.log('Value currently is ' + result.themeToUse);
    }) == "0")
  {
    root.style.setProperty('--canvasdarkmode-theme-used',   "#000");
  }
  else
  {
    root.style.setProperty('--canvasdarkmode-theme-used',   "#303640");
  }
}

setStyleSheet();
removeThemeColor();
