document
  .getElementById("register-form")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Implementar chamada AJAX para a API de registro
  });

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  // Implementar chamada AJAX para a API de login
});

function sendMessage() {
  const message = document.getElementById("chat-input").value;

  // Implementar chamada AJAX para enviar mensagem ao chatbot
  // Exibir resposta no #chat-box
}

// Exemplo de função AJAX para enviar uma requisição POST
function sendPostRequest(url, data, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.send(JSON.stringify(data));
}
