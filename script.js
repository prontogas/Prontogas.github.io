function gerarCodigo() {
  const codigo = "PG-" + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  document.getElementById("codigo").innerText = "Seu pedido foi gerado: " + codigo;

  const numero = "5521975433826"; // seu número para teste
  const mensagem = `Olá! Gostaria de fazer um pedido. Código: ${codigo}`;
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  document.getElementById("whatsappLink").href = link;
}
