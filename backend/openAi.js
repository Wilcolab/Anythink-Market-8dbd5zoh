const { OpenAI } = require("openai");

const config = {
  apiKey: process.env.OPENAI_API_KEY
};

async function createImage (title, size) {
  // API call to DALL-E to generate an image from title with size
  const openai = new OpenAI(config);
  const prompt = `This is a photo of a ${title}.`;
  const params = {
    prompt,
    n: 1,
    response_format: 'url',
    size
  };
  return await openai.images.generate(params)
}

module.exports = { createImage }