const { OpenAIAPI } = require("openai");
const openai = new OpenAIAPI(process.env.OPENAI_API_KEY);

async function getResponseFromOpenAI(message) {
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: message,
      max_tokens: 150
    });

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error("Erro ao obter resposta da OpenAI:", error);
    return null;
  }
}

module.exports = { getResponseFromOpenAI };
