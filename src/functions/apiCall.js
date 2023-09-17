const {Configuration, OpenAIApi} = require('openai');
const config = new Configuration({apiKey: "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", });
const openai = new OpenAIApi(config);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
      model: 'gpt-3.5-turbo',
      prompt: message,
      temperature: 0.7, // Corrected 'temprature' to 'temperature'
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0 // Corrected 'presense_penelty' to 'presence_penalty'
    });
    return res.data.choices[0].text;
  }
