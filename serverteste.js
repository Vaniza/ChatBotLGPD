require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { OpenAIAPI } = require("openai");

const app = express();
app.use(bodyParser.json());

// Substitua isso pela sua lógica de conexão com o banco de dados
// Por exemplo, usando um ORM como Sequelize ou uma conexão MySQL direta

// Mock de uma função de resposta da OpenAI
async function getResponseFromOpenAI(message) {
  const openai = new OpenAIAPI(process.env.OPENAI_API_KEY);
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 150
    });
    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Erro ao obter resposta da OpenAI:", error);
    return "Desculpe, ocorreu um erro.";
  }
}

// Rota para autenticação (simplificada)
app.post("/auth/register", (req, res) => {
  // Adicione aqui a lógica de cadastro
  res.send("Cadastro realizado com sucesso");
});

app.post("/auth/login", (req, res) => {
  // Adicione aqui a lógica de login
  res.send("Login realizado com sucesso");
});

// Rota para o chatbot
app.post("/chatbot/message", async (req, res) => {
  const userMessage = req.body.message;
  const response = await getResponseFromOpenAI(userMessage);
  res.json({ reply: response });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
