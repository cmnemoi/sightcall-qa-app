export interface ChatSource {
  content: string;
  url: string;
}

export interface ChatAnswer {
  answer: string;
  sources: ChatSource[];
}
