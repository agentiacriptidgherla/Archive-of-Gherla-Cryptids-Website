console.log("form submission handler script loaded");

let gradRisc =  ["Inocent 🟢🟢", "Minim🟢🟡", "Moderat🟡🟡", "Ridicat 🟡🔴", "Critic🔴🔴"]
let labelDanger = document.querySelector("label[for=risc]");
let inputDanger = document.getElementById("risc");

labelDanger.textContent = "Nivelul de risc: " + gradRisc[inputDanger.value];
inputDanger.addEventListener('input', (event) => {
  labelDanger.textContent = "Nivelul de risc: " + gradRisc[event.target.value];
});

function openReportForm() {
  let form = document.querySelector('.report-modal');
  form.style.display = 'block';
}
function closeReportForm() {
  let form = document.querySelector('.report-modal');
  form.style.display = 'none';
}

function closeConfirmModal() {
  let form = document.querySelector('.confirmation-modal');
  form.style.display = 'none';
}

window.onclick = function(event) {
  const confirmModal = document.querySelector('.confirmation-modal');
  const formModal = document.querySelector('.report-modal');
  if (event.target !== confirmModal) {
    confirmModal.style.display = 'none';
  }
  if (event.target === formModal) {
    formModal.style.display = 'none';
  }
};


