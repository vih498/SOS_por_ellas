document.getElementById("header").addEventListener("click", () => {
  window.location.href = "https://www.magazineluiza.com.br";
});

const modal = document.getElementById("denunciaModal");
const openBtn = document.getElementById("openFormBtn");
const closeBtn = document.querySelector(".close");

openBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; }