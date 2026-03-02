import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { HNSWLib } from "@langchain/community/vectorstores/hnswlib";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { RetrievalQAChain } from "langchain/chains";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let chain = null;

/**
 * Initialize the LangChain QA chain with the training data.
 * Uses HNSWLib for vector storage and OpenAI for embeddings + LLM.
 */
async function initChain() {
  if (chain) return chain;

  const dataPath = path.join(__dirname, "data.txt");
  const rawData = fs.readFileSync(dataPath, "utf-8");

  // Split the data into smaller chunks for better retrieval
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 500,
    chunkOverlap: 50,
  });
  const docs = await textSplitter.createDocuments([rawData]);

  // Create vector store from the documents
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });
  const vectorStore = await HNSWLib.fromDocuments(docs, embeddings);

  // Create the retrieval QA chain
  const model = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-3.5-turbo",
    temperature: 0.7,
  });

  chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
    returnSourceDocuments: false,
  });

  return chain;
}

/**
 * Ask a question to the chatbot.
 * @param {string} question - The user's question
 * @returns {Promise<string>} The chatbot's response
 */
export async function askQuestion(question) {
  const qaChain = await initChain();

  const systemPrompt = `You are Gbot, a friendly and helpful AI assistant on Bhargav Gutta's portfolio website. 
You answer questions about Bhargav based on the context provided. 
If you don't know the answer from the context, say so politely and suggest the user reach out to Bhargav directly.
Keep responses concise, friendly, and informative. Use a conversational tone.`;

  const result = await qaChain.call({
    query: `${systemPrompt}\n\nQuestion: ${question}`,
  });

  return result.text;
}
