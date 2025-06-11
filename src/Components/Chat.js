import "./chat.css";
import { MdSend, MdScheduleSend } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import ReactMarkdown from "react-markdown";
import { callGeminiAPI } from "../api/server";

function Chat() {
  const [messages, setMessage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const bottomRef = useRef(null);
  function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      const textToCopy = element.textContent || element.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {})
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.error("Element not found:", elementId);
    }
  }

  function sendToAi(messages) {
    callGeminiAPI(messages).then((response) => {
      const aiResponse = {
        sender: "ai",
        text: response,
      };
      setMessage((prevMessages) => [...prevMessages, aiResponse]);
      setIsLoading(false);
    });
  }

  function sendMessage(e) {
    e.preventDefault();
    if (!inputText.trim()) return;
    setIsLoading(true);
    messages.push({
      sender: "user",
      text: inputText,
    });
    setMessage([...messages]);
    setInputText("");
    sendToAi(messages);
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="gymchat-container">
      <div className="gymchat-messages">
        {messages.map((messages, index) => (
          <div
            key={index}
            className={`gymchat-message ${
              messages.sender === "user" ? "user-message" : ""
            }`}
          >
            <div className="gymchat-message-content" id={`message-${index}`}>
              <ReactMarkdown>{messages.text}</ReactMarkdown>
            </div>
            {messages.sender !== "user" && (
              <button
                className="copy-button"
                onClick={() => copyToClipboard(`message-${index}`)} // <-- cukup onClick
                title="Salin ke clipboard"
                aria-label="Salin pesan"
                style={{ display: "flex", alignItems: "center" }}
              >
                <IoCopyOutline className="copy-icon" />
              </button>
            )}

            {messages.sender === "user" && <div ref={bottomRef} />}
          </div>
        ))}
        {isLoading && (
          <div className="loading">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>
      <form className="gymchat-input-row" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Tulis pertanyaan tentang gym..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="gymchat-send-button"
          disabled={isLoading || inputText.trim() === ""}
        >
          {isLoading ? (
            <MdScheduleSend className="send-icon" />
          ) : (
            <MdSend className="send-icon" />
          )}
        </button>
      </form>
    </div>
  );
}

export default Chat;
