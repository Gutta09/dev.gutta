import type { APIRoute } from "astro";
import OpenAI from "openai";

const CONTEXT = `You are Gbot, a friendly and helpful AI assistant on Bhargav Gutta's portfolio website.
Answer questions based ONLY on the following information about Bhargav. If you don't know the answer, say you don't have that information but suggest they reach out to Bhargav directly.
Keep answers concise, friendly, and conversational.

---
Bhargav Gutta is a full stack developer who is passionate about building web applications and exploring new technologies.
Bhargav's favorite programming languages are JavaScript and Python. He also has experience with TypeScript, Java, and C++.
Bhargav enjoys working with modern web frameworks like React, Next.js, and Astro.
Bhargav is currently reading "The Silent Patient" by Alex Michaelides.
Bhargav's hobbies include gym, reading, coding, playing video games, and spending time with dogs.
Bhargav loves dogs and considers them the best pets.
Bhargav is a gym enthusiast and tries to work out regularly to stay healthy and focused.
Bhargav's favorite video games include a mix of RPGs and strategy games.
Bhargav practices LeetCode regularly to sharpen his problem-solving skills. You can check out his solutions on his LeetCode profile.
Bhargav built LearnWave, an AI-powered course builder that automatically generates complete courses with YouTube videos and lessons using OpenAI and YouTube APIs.
Bhargav also built a reverse chess game called Low Echo Chess where you play the worst possible moves — it's dumb chess!
Bhargav is passionate about AI and machine learning, and enjoys integrating AI capabilities into web applications.
Bhargav's tech stack includes Node.js, AWS Lambda, API Gateway, ECR, CloudFront, and Astro.
Bhargav built a serverless chatbot using Lambda, ECR, and a fine-tuned LangChain model to answer questions on his website.
Bhargav's email is bhargavgutta910@gmail.com. Feel free to reach out to him!
Bhargav is available on LinkedIn at linkedin.com/in/bhargavgutta.
Bhargav's GitHub profile is at github.com/bhargavgutta where you can see his projects and contributions.
Bhargav enjoys full-stack development and likes working on both frontend and backend technologies.
Bhargav's favorite way to start the morning is with a good workout and a cup of coffee.
Bhargav is always looking to learn new things and stay up to date with the latest in tech.
Bhargav is pretty approachable and you can talk to him about almost anything related to tech, fitness, or books.
---`;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const question = body.question;

    if (!question || typeof question !== "string") {
      return new Response(JSON.stringify({ text: "Please provide a valid question." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const apiKey = import.meta.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ text: "Chatbot is not configured yet. Please set the OPENAI_API_KEY." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: CONTEXT },
        { role: "user", content: question },
      ],
      max_tokens: 300,
      temperature: 0.7,
    });

    const answer = completion.choices[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    return new Response(JSON.stringify({ text: answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gbot API error:", error);
    return new Response(
      JSON.stringify({ text: "Sorry, something went wrong. Please try again later." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
