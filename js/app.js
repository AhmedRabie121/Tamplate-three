


let otherLinks = document.querySelector(".other");
let megaMenu = document.querySelector(".mega-menu");
console.log(megaMenu)
otherLinks.addEventListener("click", () => {
    megaMenu.style.opacity = "1";
    megaMenu.style.setProperty("top" , "calc(100% + 1px)");
    megaMenu.style.zIndex = `100`;
})
otherLinks.addEventListener("blur", () => {
    megaMenu.style.opacity = "0";
    megaMenu.style.setProperty("top" , "calc(100% + 50px)");
    megaMenu.style.zIndex = `-1`;
})




