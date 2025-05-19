// Domain model for chat messages
import type { ChatAnswer } from "./ChatAnswer";

export interface ChatMessage {
  sender: "user" | "bot";
  content: string;
  answer?: string;
  sources?: ChatAnswer["sources"];
}
