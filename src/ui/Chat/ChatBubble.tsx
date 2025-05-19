import React from "react";
import styles from "./ChatBubble.module.css";
import SourcesAccordion from "./SourcesAccordion";
import type { Source } from "./SourcesAccordion";
import { ChatAnswerDisplay } from "./ChatAnswerDisplay";

type ChatBubbleProps = {
  sender: "user" | "bot";
  message: string;
  sources?: Source[];
};

const ChatBubble = React.forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ sender, message, sources }, ref) => {
    const bubbleClass = [
      styles.chatBubble,
      sender === "user" ? styles.user : styles.bot,
    ].join(" ");

    return (
      <div ref={ref} className={bubbleClass}>
        {sender === "bot" ? (
          <ChatAnswerDisplay markdownAnswer={message} />
        ) : (
          <span>{message}</span>
        )}
        {sender === "bot" && sources && sources.length > 0 && (
          <SourcesAccordion sources={sources} />
        )}
      </div>
    );
  },
);

export default ChatBubble;
