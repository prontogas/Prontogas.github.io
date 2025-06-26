function gerarCodigo() {
  const tipoProduto = document.querySelector('input[name="produto"]:checked').value;
  const codigo = "PG-" + Math.floor(1000 + Math.random() * 9000);
  const mensagem = `Olá! Gostaria de fazer um pedido. Produto: ${tipoProduto}. Código: ${codigo}`;

  const whatsappLink = document.getElementById("whatsappLink");
  whatsappLink.href = `https://wa.me/5521975433826?text=${encodeURIComponent(mensagem)}`;
  whatsappLink.style.display = "inline-block";
  whatsappLink.innerText = "Enviar pelo WhatsApp";
}
