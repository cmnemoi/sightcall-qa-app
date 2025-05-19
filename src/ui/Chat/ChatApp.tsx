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
        <div className={styles.githubLinks}>
          <a
            href="https://github.com/cmnemoi/sightcall_qa_api"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="Backend GitHub Repository"
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
                fill="currentColor"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            Backend
          </a>
          <a
            href="https://github.com/cmnemoi/sightcall-qa-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="Frontend GitHub Repository"
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
                fill="currentColor"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            Frontend
          </a>
        </div>
        <span style={{ margin: "0 10px", color: "#bbb" }}>|</span>
        <span className={styles.copyright}>© {new Date().getFullYear()} C. Madi Mnemoi</span>
      </footer>
    </div>
  );
};

export default ChatApp;
