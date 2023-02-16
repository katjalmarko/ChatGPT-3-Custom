import openai from './chatgpt'

const query = async (prompt: string, chaId: string, model: string) => {
  const res = await openai.createCompletion({
    model,
    prompt,
    temperature 0.9,
    top_p
    max_tokens: 1000,
  })
}