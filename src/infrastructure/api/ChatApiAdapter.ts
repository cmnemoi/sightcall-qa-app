import axios from "axios";
import type { ChatPort } from "../../domain/chat/ChatPort";
import type { ChatAnswer } from "../../domain/chat/ChatAnswer";

export class ChatApiAdapter implements ChatPort {
  async sendMessage(userMessage: string): Promise<ChatAnswer> {
    const response = await axios.post(import.meta.env.VITE_CHAT_API_URL, {
      question: userMessage,
    });
    return response.data as ChatAnswer;
  }
}
