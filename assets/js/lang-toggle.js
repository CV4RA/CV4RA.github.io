(function() {
  var switcher = document.getElementById('lang-switcher');
  if (!switcher) return;

  var storageKey = 'cv4ra-lang';
  var supported = ['en', 'zh'];

  function safeStorageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  function safeStorageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {};
  }

  function eachElement(elements, callback) {
    for (var i = 0; i < elements.length; i += 1) {
      callback(elements[i]);
    }
  }

  function updateLocalizedText(lang) {
    var entries = document.querySelectorAll('[data-en][data-zh]');
    eachElement(entries, function(entry) {
      entry.textContent = lang === 'zh' ? entry.getAttribute('data-zh') : entry.getAttribute('data-en');
    });

    var labelEntries = document.querySelectorAll('[data-lang-en][data-lang-zh]');
    eachElement(labelEntries, function(entry) {
      entry.textContent = lang === 'zh' ? entry.getAttribute('data-lang-zh') : entry.getAttribute('data-lang-en');
    });
  }

  function setLanguage(lang) {
    if (supported.indexOf(lang) === -1) {
      lang = 'en';
    }

    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
    switcher.textContent = lang === 'zh' ? 'EN' : '中文';
    switcher.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换到中文');
    updateLocalizedText(lang);
    safeStorageSet(storageKey, lang);
  }

  function initLanguage() {
    var saved = safeStorageGet(storageKey);
    if (saved && supported.indexOf(saved) !== -1) {
      return saved;
    }

    var browserLang = (navigator.language || navigator.userLanguage || 'en').substr(0, 2).toLowerCase();
    return supported.indexOf(browserLang) !== -1 ? browserLang : 'en';
  }

  setLanguage(initLanguage());

  switcher.addEventListener('click', function() {
    setLanguage(document.documentElement.lang === 'zh' ? 'en' : 'zh');
  });
})();
