import { OpenAI } from "langchain/llms/openai";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage } from "langchain/schema";

const llm = new OpenAI({
  openAIApiKey: process.env.OpenAIApiKey,
  temperature: 0.7,
});

const chatModel = new ChatOpenAI({
  openAIApiKey: process.env.OpenAIApiKey,
  temperature: 0.7,
});

const text = "What would be a good company name for a company that makes colorful socks?"

const messages = [new HumanMessage({ content: text })];

const llmResult = await llm.predictMessages(messages);

const chatModelResult = await chatModel.predictMessages(messages);

export default function PromptGenerationPredictMessage() {
  console.log(llmResult);
  console.log(chatModelResult);
    return (
      <div>
        <p className="text-red-700 text-2xl font-bold">{`${llmResult.content}`}</p>
        <br/>
        <p className="text-red-700 text-2xl font-bold">{`${chatModelResult.content}`}</p>
      </div>
    );
}