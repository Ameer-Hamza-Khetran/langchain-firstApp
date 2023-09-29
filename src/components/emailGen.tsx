import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';

const llm = new OpenAI({
    openAIApiKey: process.env.OpenAIApiKey,
    temperature: 0,
})

const template = "Generate a HTML table email template to {receiver} from {sender} asking for $30 as a loan for 1 week. Also generate an appropriate subject line and include it in the html table email template. Do not display anything else, only display the complete html table email template."

const prompt = PromptTemplate.fromTemplate(template);

const formattedPromptTemplate = await prompt.format({
    receiver: "Fahad",
    sender: "Hamza",
});

const llmResult = await llm.predict(formattedPromptTemplate)

export default function EmailPromptGen() {
    return(
        <div>
            <p className='text-red-700 text-2xl font-bold'>{`${llmResult}`}</p>
        </div>
    );
}