const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions";
const prompt = "codigo autolisp para criar linhas simples ?";


const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${apiKey}`
};

const data = {
  prompt: prompt,
  max_tokens: 2048,
  temperature: 0.5
};

fetch(endpoint, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
  .then((response) => response.json())
  .then((json) => {
    var pegando = json.choices[0].text;
    console.log(pegando);
  });
