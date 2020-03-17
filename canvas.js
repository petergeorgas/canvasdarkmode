/* Function that removes the standard theme color from Canvas pages and replaces it with solid black */

function removeThemeColor()
{
  document.querySelector("[name='theme-color']").remove()
  var head = document.getElementsByTagName('HEAD')[0];
  var meta = document.createElement('meta');
  meta.setAttribute('name', 'theme-color')
  meta.content = "#303640";
  head.appendChild(meta);
}

removeThemeColor();
