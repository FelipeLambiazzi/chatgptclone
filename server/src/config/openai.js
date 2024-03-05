import OpenAI from "openai";


module.exports = class openai{
    static configuration(){
        const configuration = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
          });

          return new OpenAIApi(configuration)
    }

    static textCompletion ({prompt}){
        return{
            model: "gpt-3.5-turbo",
            prompt:`${prompt}`,
            temperature: 1,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,

        }
    }

}

/*const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: [
    {
      "role": "user",
      "content": "diga um nome legal para uma aula de node com chatgpt"
    }
  ],
  temperature: 1,
  max_tokens: 256,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});*/