fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'What is the meaning of life?',
    temperature: 0.5
  })
})
.then(response => response.json())
.then(data => {
  console.log(data.choices[0].text);
})
.catch(error => {
  console.error('Error:', error);
});
