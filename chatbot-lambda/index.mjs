import { askQuestion } from "./chain.mjs";

/**
 * AWS Lambda handler for the chatbot.
 * Receives a POST request with { question: "..." }
 * Returns { text: "..." } with the chatbot's response.
 */
export const handler = async (event) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS" || event.requestContext?.http?.method === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  try {
    const body = typeof event.body === "string" ? JSON.parse(event.body) : event.body;
    const question = body?.question;

    if (!question) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Please provide a question." }),
      };
    }

    const answer = await askQuestion(question);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: answer }),
    };
  } catch (error) {
    console.error("Error processing request:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: "Sorry, I encountered an error. Please try again later.",
      }),
    };
  }
};
