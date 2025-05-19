import React from "react";
import ChatBubble from "./ChatBubble";
import styles from "./ChatMessageList.module.css";

import ChatSpinner from "./ChatSpinner";
import type { Source } from "./SourcesAccordion";

interface ChatMessageListProps {
  messages: {
    sender: "user" | "bot";
    message: string;
    sources?: Source[];
  }[];
  isBotTyping?: boolean;
}

const ChatMessageList: React.FC<ChatMessageListProps> = ({
  messages,
  isBotTyping,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }, [messages, isBotTyping]);
  // Ref pour la première bulle du dernier message bot
  const lastBotMsgRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    // Si le dernier message est du bot, scroll au début de sa bulle
    if (messages.length > 0 && messages[messages.length - 1].sender === "bot") {
      lastBotMsgRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Sinon, scroll en bas classique
      const container = containerRef.current;
      if (!container) return;
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isBotTyping]);
  return (
    <div ref={containerRef} className={styles.chatMessageList}>
      {messages.map((msg, idx) => {
        const isLastBot =
          msg.sender === "bot" &&
          messages.slice(idx + 1).findIndex((m) => m.sender === "bot") === -1;
        return (
          <ChatBubble
            key={idx}
            sender={msg.sender}
            message={msg.message}
            sources={msg.sender === "bot" ? msg.sources : undefined}
            ref={isLastBot ? lastBotMsgRef : undefined}
          />
        );
      })}
      {isBotTyping && (
        <div style={{ alignSelf: "flex-start", maxWidth: "80%" }}>
          <ChatSpinner />
        </div>
      )}
    </div>
  );
};

export default ChatMessageList;
