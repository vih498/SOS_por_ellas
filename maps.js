const map = L.map('mapa').setView([-8.05783, -34.87696], 14);

L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap &copy; CARTO',
  subdomains: 'abcd',
  maxZoom: 25
}).addTo(map);

const unidades = [
  { nome: "Delegacia da Mulher - Praça do Campo Santo", endereco: "Praça do Campo Santo, S/N - Santo Amaro, Recife - PE, 50100-160", lat: -8.05694, lng: -34.87936 },
  { nome: "Centro de Referência Clarice Lispector", endereco: "R. Dr. Silva Ferreira, 122 - Santo Amaro, Recife - PE, 50040-130", lat: -8.06167, lng: -34.87389 },
  { nome: "Departamento de Polícia da Mulher", endereco: "Avenida Alfredo Lisboa, 188 - Bairro do Recife, Recife - PE, 50030-150", lat: -8.058577, lng: -34.869682},
  { nome: "Núcleo de Apoio à Mulher (Nam)", endereco: "Avenida Visconde de Suasuna, 99, B04/05 - Santo Amaro, Recife - PE, 50050-540", lat: -8.055044, lng: -34.883230},
  { nome: "1ª Promotoria de Justiça De Violência Doméstica", endereco: "Fórum Rodolfo Aureliano - Joana Bezerra, Recife - PE, 50030-230", lat:-8.07070614358838, lng:-34.894858763111515},
  { nome: "Núcleo de Defesa da Mulher Vítima de Violência Doméstica (Nudem)", endereco: "Avenida Manoel Borba, 640, - Boa Vista, Recife - PE, 50070-045", lat:-8.059210501493057, lng:-34.890901153270775},
  { nome: "Sala da Mulher - Compaz Dom Helder Câmara", endereco: "Rua Lourenço de Sá, 140, - Joana Bezerra, Recife - PE, 50090-540 ", lat:-8.073597110799705, lng:-34.89548853143927},
  { nome: "Centro da Mulher Metropolitana Júlia Santiago", endereco: "Rua Carapeba, 476, - Brasília Teimosa, Recife - PE, 51010-420", lat:-8.085534059267976, lng:-34.881354161289636},
  { nome: "Centro de Atendimento à Mulher", endereco:" Rua Carapeba, s/n - Brasília Teimosa, Recife - PE, 51010-420", lat:-8.084863407746269, lng:-34.88154089580319},
  { nome: "Centro de Referência e Atenção às Mulheres em Situação de Violência Doméstica e Sexista (Cram)", endereco: "Rua Bernardo Guimarães, 470, - Santo Amaro, Recife - PE, 50050-440", lat:-8.05356284669294, lng:-34.88867121711385},
];

unidades.forEach(u => {
  L.marker([u.lat, u.lng]).addTo(map)
    .bindPopup(`<b>${u.nome}</b><br>${u.endereco}`);
});