if (window.navigator.language == "ja") {
  switchLang('ja');
}
else {
  switchLang('en')
}
openTab(event, 'all')

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function switchLang(lang) {
  var i, langElements;
  langElements = document.getElementsByClassName("lang-" + lang);
  for (i = 0; i < langElements.length; i++) {
    langElements[i].style.display = "block";
  }
  langElements = document.getElementsByClassName("lang-" + (lang === "en" ? "ja" : "en"));
  for (i = 0; i < langElements.length; i++) {
    langElements[i].style.display = "none";
  }
}
