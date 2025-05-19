import type { ChatPort } from "./ChatPort";
import type { ChatAnswer } from "./ChatAnswer";

export class ChatService {
  private chatAdapter: ChatPort;

  constructor(chatAdapter: ChatPort) {
    this.chatAdapter = chatAdapter;
  }

  async converse(userMessage: string): Promise<ChatAnswer> {
    return this.chatAdapter.sendMessage(userMessage);
  }
}
