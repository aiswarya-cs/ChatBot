import { prevUser } from "@/context/UserContext";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

export async function generateResponse() {
  if (!API_URL || !API_KEY) {
    console.error("API_URL or API_KEY is not defined");
    return;
  }

  const bodyContent = {
    contents: [
      {
        parts: [{ text: prevUser.prompt }],
      },
    ],
  };

  if (prevUser.data) {
    bodyContent.contents[0].parts.push({
      inline_data: {
        mime_type: prevUser.mime_type,
        data: prevUser.data,
      },
    });
  }

  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyContent),
  };

  try {
    const response = await fetch(API_URL, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const apiResponse = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
    // console.log("API Response:", data);
    return apiResponse;
  } catch (error) {
    console.error("Error:", error);
  }
}
