function setLang(lang) {
  document.body.style.direction = (lang === "ar") ? "rtl" : "ltr";
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(data-${lang});
  });
  localStorage.setItem("lang", lang);
}

window.onload = () => {
  const savedLang = localStorage.getItem("lang") || "en";
  document.getElementById("lang").value = savedLang;
  setLang(savedLang);
};
