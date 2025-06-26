
function gerarCodigo() {
  const produtoSelecionado = document.querySelector('input[name="produto"]:checked').value;
  const codigo = Math.floor(1000 + Math.random() * 9000);
  const codigoPedido = `PG-${codigo}`;

  document.getElementById("codigo").innerText = `Seu pedido foi gerado: ${codigoPedido}`;

  const mensagem = `Olá! Gostaria de pedir ${produtoSelecionado}. Código do pedido: ${codigoPedido}`;
  const telefone = "5521975433826"; // Seu número com DDD
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = link;
  whatsappLink.style.display = "inline";
}
