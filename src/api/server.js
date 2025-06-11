import axios from "axios";

export const callGeminiAPI = async (messages) => {
  const GEMINI_API = process.env.REACT_APP_GEMINI_API;
  try {
    const formattedPrompt =
      `Kamu adalah asisten virtual yang hanya menjawab pertanyaan tentang
      gym, kebugaran, latihan fisik, dan nutrisi olahraga.
      Jika user bertanya di luar topik, jawab dengan:
      "Maaf, saya hanya dapat menjawab pertanyaan seputar nutrisi, fitness, dan jadwal latihan gym."${messages
        .map((msg) => `${msg.sender === "user" ? "User" : "AI"}: ${msg.text}`)
        .join("\n")}AI:`.trim();

    const response = await axios.post(
      GEMINI_API,
      {
        contents: [
          {
            parts: [{ text: formattedPrompt }],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const reply =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Gagal mendapatkan respons dari AI.";

    return reply;
  } catch (error) {
    console.error(
      "API error:",
      error.response ? error.response.data : error.message
    );

    if (error.response?.data?.error?.message) {
      return `API Error: ${error.response.data.error.message}`;
    }
    return "API_ERROR: Terjadi kesalahan saat menghubungi server API.";
  }
};
