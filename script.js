
function sendMessage(elemento) {
  let text = elemento.firstElementChild.innerText;
  let phoneNumber = prompt("Digite o número que deseja enviar a mensagem.");

  let zapLink = `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=${text}`;

  window.open(zapLink);  
};