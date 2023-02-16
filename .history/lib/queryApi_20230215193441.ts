import openai from './chatgpt'

const query = async (prompt: string, chaId: string, model: string) => {
  const res = await openai.createCompletion({
    model,
    prompt,
    temperature: 0.9,
    // if low, chatgpt will be more straightfo
    top_p: 1,
    max_tokens: 1000,
  })
}