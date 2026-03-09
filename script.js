function setLang(lang){
document.querySelectorAll("[data-"+lang+"]").forEach(el => {
el.innerText = el.getAttribute("data-"+lang);
});
}
