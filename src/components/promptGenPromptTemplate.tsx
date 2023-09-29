import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";

const llm = new OpenAI({
  openAIApiKey: process.env.OpenAIApiKey,
  temperature: 0.7,
});

const prompt = PromptTemplate.fromTemplate("What is a good name for a company that makes {product}?");

const formattedPrompt = await prompt.format({
  product: "colorful socks",
});

const llmResult = await llm.predict(formattedPrompt)

export default function PromptGenPromptTemplate() {
  console.log(llmResult);
    return (
      <div>
        <p className="text-red-700 text-2xl font-bold">{`${llmResult}`}</p>
      </div>
    );
}