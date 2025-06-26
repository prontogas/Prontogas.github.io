function gerarCodigo() {
  // produto
  const produtoSelecionado =
        document.querySelector('input[name="produto"]:checked').value;

  // código aleatório
  const codigo = Math.floor(1000 + Math.random() * 9000);
  const codigoPedido = `PG-${codigo}`;

  // endereço informado
  const endereco = document.getElementById('endereco').value.trim();

  // mostra embaixo do botão
  document.getElementById('codigo').innerText =
      `Seu pedido foi gerado: ${codigoPedido}`;

  // monta a mensagem
  const mensagem =
    `Olá! Gostaria de pedir ${produtoSelecionado}.` +
    ` Código do pedido: ${codigoPedido}.` +
    ` Endereço: ${endereco}`;

  // SEU número já com +55 DDD
  const telefone = '+5521975433826';

  // cria o link do WhatsApp
  const link = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  // atualiza o <a>
  const whatsappLink = document.getElementById('whatsappLink');
  whatsappLink.href = link;
  whatsappLink.style.display = 'inline';
}
