const userProfile = document.getElementById("user-profile");
const settingMenu = document.querySelector(".setting-menu");
const themeBtn = document.getElementById("theme-btn");

const toggleSettingsMenu = () => {
  settingMenu.classList.toggle("setting-menu-height");
};

const switchTheme = () => {
  themeBtn.classList.toggle("dark-mode");
  document.body.classList.toggle("dark-theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

function getLocalStorage() {
  if (localStorage.getItem("theme") == "light") {
    themeBtn.classList.remove("dark-mode");
    document.body.classList.remove("dark-theme");
  } else if (localStorage.getItem("theme") == "dark") {
    themeBtn.classList.add("dark-mode");
    document.body.classList.add("dark-theme");
  } else {
    localStorage.setItem("theme", "light");
  }
}

userProfile.addEventListener("click", toggleSettingsMenu);
themeBtn.addEventListener("click", switchTheme);
document.addEventListener("DOMContentLoaded", getLocalStorage);
