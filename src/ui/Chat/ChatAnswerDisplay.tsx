import React from "react";
import ReactMarkdown from "react-markdown";

export interface ChatAnswerDisplayProps {
  markdownAnswer: string;
}

export const ChatAnswerDisplay: React.FC<ChatAnswerDisplayProps> = ({
  markdownAnswer,
}) => <ReactMarkdown>{markdownAnswer}</ReactMarkdown>;
