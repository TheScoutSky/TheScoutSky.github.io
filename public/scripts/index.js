

document.getElementById("sidebarBtn").onclick = () => {
  toggleSidebar()
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar")
  if (sidebar.style.display === "none") {
    sidebar.style.display = "flex"
  } else {
    sidebar.style.display = "none"
  }
}

function showSidebar() {
  const sidebar = document.getElementById("navbar-media");
  sidebar.style.display = "flex";
}

function hideSidebar() {
  const sidebar = document.getElementById("navbar-media");
  sidebar.style.display = "none";
}