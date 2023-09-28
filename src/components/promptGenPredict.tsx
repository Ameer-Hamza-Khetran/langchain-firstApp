import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";

const llm = new OpenAI({
  openAIApiKey: process.env.OpenAIApiKey,
  temperature: 0.7,
});

const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.OpenAIApiKey,
  temperature: 0.7,
});

const text = "What would be a good company name for a company that makes colorful socks?"

const llmResult = await llm.predict(text);

const chatModelResult = await chatModel.predict(text);

export default function PromptGeneration() {
  console.log(llmResult);
  console.log(chatModelResult);
    return (
      <div>
        <p className="text-red-700 text-2xl font-bold">{`${llmResult}`}</p>
        <br/>
        <p className="text-red-700 text-2xl font-bold">{`${chatModelResult}`}</p>
      </div>
    );
}