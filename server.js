require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rota para a página HTML
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/chatbot.html");
});

// Rota para processar as mensagens do chatbot
app.post("/api/chatbot", async (req, res) => {
  const userMessage = req.body.message;

  // Chame a API OpenAI para obter a resposta do chatbot
  const openaiResponse = await getOpenAIResponse(userMessage);

  res.json({ botMessage: openaiResponse });
});

// Função para chamar a API OpenAI
async function getOpenAIResponse(userMessage) {
  // Substitua 'SUA_CHAVE_DE_API' pela sua chave de API OpenAI
  const apiKey = process.env.OPENAI_API_KEY;
  const openaiEndpoint = "https://api.openai.com/v1/chat/completions";

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`
  };

  const data = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "Você é um assistente virtual." },
      { role: "user", content: userMessage }
    ]
  };

  const response = await axios.post(openaiEndpoint, data, { headers });
  return response.data.choices[0].message.content;
}

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
