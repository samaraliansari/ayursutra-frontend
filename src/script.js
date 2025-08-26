document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
});

