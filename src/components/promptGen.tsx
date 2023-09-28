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

const text = "Write an email to my friend Hassam asking him for some food as a loan that I would return him 1 week later. Write in such a tone that he cannot recognise that the email is written by an LLM. Use vocabulary of a 5th grader. Use the name 'Fahad' whereever my name is necessary. Don't write anything else, only print the email."  

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