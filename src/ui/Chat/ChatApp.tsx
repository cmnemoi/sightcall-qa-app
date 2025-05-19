import React, { useState } from "react";
import ChatMessageList from "./ChatMessageList";
import ChatInput from "./ChatInput";
import styles from "./ChatApp.module.css";
import type { Source } from "./SourcesAccordion";
import { ChatService } from "../../domain/chat/ChatService";
import { ChatApiAdapter } from "../../infrastructure/api/ChatApiAdapter";

export type ChatMessage = {
  sender: "user" | "bot";
  message: string;
  sources?: Source[];
};

const chatServiceRef = {
  current: new ChatService(new ChatApiAdapter()),
};

interface ExampleQuestionsProps {
  onExampleClick: (question: string) => void;
}

const EXAMPLES: Record<string, string> = {
  "How does SightCall solution work ?": "How does SightCall solution work ?",
  "SightCall clients": "Give me some examples of SightCall clients.",
  "SightCall gains":
    "What are the most common gains observed by SightCall clients ?",
};

const ExampleQuestions: React.FC<ExampleQuestionsProps> = ({
  onExampleClick,
}) => (
  <div className={styles.exampleQuestions}>
    {Object.entries(EXAMPLES).map(([key, value]) => (
      <button
        key={key}
        type="button"
        className={styles.exampleButton}
        onClick={() => onExampleClick(value)}
        tabIndex={0}
        aria-label={`Send example: ${value}`}
      >
        {key}
      </button>
    ))}
  </div>
);

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: "bot", message: "Hello! How can I help you?" },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const handleSendMessage = async (text: string) => {
    if (text.trim() === "") return;
    setMessages((previous) => [...previous, { sender: "user", message: text }]);
    setIsBotTyping(true);
    try {
      const response = await chatServiceRef.current.converse(text);
      setMessages((previous) => [
        ...previous,
        { sender: "bot", message: response.answer, sources: response.sources },
      ]);
    } catch (error: unknown) {
      console.error(error);
      setMessages((previous) => [
        ...previous,
        { sender: "bot", message: `An error occurred: ${error}` },
      ]);
    } finally {
      setIsBotTyping(false);
    }
  };

  return (
    <div className={styles.chatApp}>
      <header className={styles.chatHeader}>
        <h1>SightCall Bot</h1>
        <p>AI-powered answers for your prospects</p>
      </header>
      <ChatMessageList messages={messages} isBotTyping={isBotTyping} />
      <ExampleQuestions onExampleClick={handleSendMessage} />
      <ChatInput onSend={handleSendMessage} />
      <footer className={styles.chatFooter}>
        <span>
          <a
            href="https://github.com/cmnemoi/sightcall-qa-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Repository"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              style={{ verticalAlign: "middle", marginRight: 6 }}
            >
              <path
                fill="#7d3ef6"
                d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.57 2.36 1.12 2.94.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02a9.25 9.25 0 0 1 5 0c1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.95.68 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
              />
            </svg>
            GitHub
          </a>
        </span>
        <span style={{ margin: "0 10px", color: "#bbb" }}>|</span>
        <span>© {new Date().getFullYear()} C. Madi Mnemoi</span>
      </footer>
    </div>
  );
};

export default ChatApp;
