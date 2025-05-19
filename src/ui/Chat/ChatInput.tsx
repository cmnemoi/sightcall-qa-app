import React, { useState } from "react";
import styles from "./ChatInput.module.css";

interface ChatInputProps {
  onSend: (text: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form
      className={styles.chatInput}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className={styles.inputField}
        type="text"
        placeholder="Write a message..."
        value={text}
        onChange={handleChange}
      />
      <button
        className={styles.sendButton}
        type="submit"
        disabled={!text.trim()}
      >
        Envoyer
      </button>
    </form>
  );
};

export default ChatInput;
