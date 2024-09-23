function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}

document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', () => {
      closeMenu();  // Close menu on link click for mobile
  });
});

document.querySelectorAll('a[target="_blank"]').forEach(link => {
  link.setAttribute('rel', 'noopener noreferrer');
});