function gerarCodigo() {
  const codigo = 'PG-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('codigo').innerText = 'Seu pedido foi gerado: ' + codigo;
}
