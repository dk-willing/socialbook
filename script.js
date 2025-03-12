const userProfile = document.getElementById("user-profile");
const settingMenu = document.querySelector(".setting-menu");

const toggleSettingsMenu = () => {
  settingMenu.classList.toggle("setting-menu-height");
};

userProfile.addEventListener("click", toggleSettingsMenu);
