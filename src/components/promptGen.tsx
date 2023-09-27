import { OpenAI } from "langchain/llms/openai";

const llm = new OpenAI({
  openAIApiKey: process.env.OpenAIApiKey,
});

export default function PromptGeneration() {
    return (
        <p className="text-red-700 text-2xl font-bold">Hello Prompt Generation</p>
    );
}