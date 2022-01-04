var body = document.querySelector("body")
document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    setTimeout(function () {
      body.classList.remove("preloader_active")
    }, 2500)
  }
}
