import openai from './chatgpt'

const query = async (prompt: string, chaId: string, model: string) => {
  const res = await openai.createCompletion({
    model,
    prompt,
    temperature: 0.9,
    // if low, chatgpt will be more specific, if high -> more creative
    top_p: 1,
    max_tokens: 1000,
    frequency_penalty: 0,
    presence_penalty: 0,
  }).then(res => res.data.choices[0].text).catch
}