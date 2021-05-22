import "./css/styles.css";
import menuTemplate from "./templates/menu.handlebars";
import refs from "./js/refs";
import menu from "./menu.json";

const kindsOfThemes = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

getMsgFromLocalStorage();

menu.forEach((item) => {
  let markup = menuTemplate(item);
  refs.menuList.innerHTML += markup;
});

refs.toggle.addEventListener("change", () => {
  if (
    refs.body.classList == false ||
    refs.body.classList == kindsOfThemes.LIGHT
  ) {
    refs.body.classList.add(kindsOfThemes.DARK);
    refs.body.classList.remove(kindsOfThemes.LIGHT);
    localStorage.setItem("theme", kindsOfThemes.DARK);
  } else if (refs.body.classList == kindsOfThemes.DARK) {
    localStorage.removeItem("theme", kindsOfThemes.DARK);
    localStorage.setItem("theme", kindsOfThemes.LIGHT);
    refs.body.classList.remove(kindsOfThemes.DARK);
    refs.body.classList.add(kindsOfThemes.LIGHT);
  }
});

function getMsgFromLocalStorage() {
  let msgFromLocalStorage = localStorage.getItem("theme");
  if (msgFromLocalStorage) {
    refs.body.className = msgFromLocalStorage;
  }
}
