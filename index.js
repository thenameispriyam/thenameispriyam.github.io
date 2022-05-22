console.log("Hello");
document.querySelector(".cross").style.display = "none";
document.querySelector(".responsiveSidepanel").addEventListener("click", () => {
  document.querySelector(".sidepanel").classList.toggle("sidepanelGo");
  if (document.querySelector(".sidepanel").classList.contains("sidepanelGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".cross").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 350);
  }
});
