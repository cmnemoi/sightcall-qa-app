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
  // Ref for the first bubble of the last bot message
  const lastBotMsgRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    // If the last message is from the bot, scroll to the start of its bubble
    if (messages.length > 0 && messages[messages.length - 1].sender === "bot") {
      lastBotMsgRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Otherwise, scroll to the bottom classically
      const container = containerRef.current;
      if (!container) return;
      container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
    }
  }, [messages, isBotTyping]);
  return (
    <div ref={containerRef} className={styles.chatMessageList}>
      {messages.map((message, index) => {
        const isLastBot =
          message.sender === "bot" &&
          messages.slice(index + 1).findIndex((m) => m.sender === "bot") === -1;
        return (
          <ChatBubble
            key={index}
            sender={message.sender}
            message={message.message}
            sources={message.sender === "bot" ? message.sources : undefined}
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
