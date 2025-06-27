function gerarCodigo() {
  const nome = document.getElementById("nome").value;
  const endereco = document.getElementById("endereco").value;
  const referencia = document.getElementById("referencia").value;
  const pagamento = document.getElementById("pagamento").value;

  const codigo = Math.floor(1000 + Math.random() * 9000);
  const codigoPedido = `PG-${codigo}`;

  const mensagem = 
    `Olá! Gostaria de pedir gás ou água.\n\n` +
    `Código do pedido: ${codigoPedido}\n` +
    `Nome: ${nome}\n` +
    `Endereço: ${endereco}\n` +
    `Ponto de referência: ${referencia}\n` +
    `Forma de pagamento: ${pagamento}`;

  const telefone = "5521975433826"; // Seu número com DDI (55 + DDD + número)
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  window.open(link, "_blank");
}
