// Input port interface for chat
import type { ChatAnswer } from "./ChatAnswer";

export interface ChatPort {
  sendMessage(userMessage: string): Promise<ChatAnswer>;
}
