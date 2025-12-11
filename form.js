const acompanhamentoRadios = document.querySelectorAll('input[name="acompanhamento"]');
const acompanhamentoInfo = document.getElementById('acompanhamentoInfo');
const acompanhamentoContainer = document.getElementById('acompanhamentoContainer');
const anonimaCheckbox = document.querySelector('input[name="anonima"]');
const denunciaForm = document.getElementById('denunciaForm');

acompanhamentoRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    acompanhamentoInfo.style.display = radio.value === 'sim' ? 'block' : 'none';
  });
});

anonimaCheckbox.addEventListener('change', () => {
  if (anonimaCheckbox.checked) {
    acompanhamentoContainer.style.display = 'none';
    acompanhamentoRadios.forEach(radio => radio.checked = false);
    acompanhamentoInfo.style.display = 'none';
  } else {
    acompanhamentoContainer.style.display = 'block';
  }
});

denunciaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Denúncia enviada com sucesso!");
  denunciaForm.reset();
  acompanhamentoContainer.style.display = 'block';
  acompanhamentoInfo.style.display = 'none';
});