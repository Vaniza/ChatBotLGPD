// src/controllers/chatController.js

async function processMessage(req, res) {
  const { message } = req.body;

  // Aqui você implementará a lógica de interação com a API da OpenAI
  // Por exemplo, fazer uma requisição à API e retornar a resposta

  const response = "Resposta do Chatbot para a mensagem: " + message; // Placeholder
  res.json({ response });
}

module.exports = {
  processMessage
};
