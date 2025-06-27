// Coletar a localização assim que a página carregar
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("localizacao").value = `https://www.google.com/maps?q=${lat},${lon}`;
  },
  (error) => {
    console.warn("Localização não autorizada ou indisponível.");
    document.getElementById("localizacao").value = "Localização não informada";
  }
);

function gerarCodigo() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const referencia = document.getElementById("referencia").value;
  const pagamento = document.getElementById("pagamento").value;
  const localizacao = document.getElementById("localizacao").value;

  const codigo = Math.floor(1000 + Math.random() * 9000);
  const codigoPedido = `PG-${codigo}`;

  const mensagem =
    `Olá! Gostaria de pedir gás ou água.\n\n` +
    `Código do pedido: ${codigoPedido}\n` +
    `Nome: ${nome}\n` +
    `Endereço: ${endereco}\n` +
    `Ponto de referência: ${referencia}\n` +
    `Forma de pagamento: ${pagamento}\n` +
    `Localização: ${localizacao}`;

  const telefone = "5521975433826"; // Seu número com DDI + DDD + número
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}
