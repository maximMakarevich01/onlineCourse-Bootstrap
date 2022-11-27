window.addEventListener("scroll", (e) => {
  let navbar = document.getElementById("navbar").classList;
  let active_class = "navbar_scrolled";

  if (scrollY > 20) navbar.add(active_class);
  else navbar.remove(active_class);
});
