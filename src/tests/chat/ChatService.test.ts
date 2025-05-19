import { describe, it, expect } from "vitest";
import { ChatService } from "../../domain/chat/ChatService";
import { FakeChatAdapter } from "./FakeChatAdapter";

describe("ChatService", () => {
  it("should return answer and sources from the adapter", async () => {
    // Given
    const service = new ChatService(new FakeChatAdapter(0));
    // When
    const response = await service.converse("What is SightCall?");
    // Then
    expect(response.answer).toBe(
      "What is SightCall? : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper, orci quis placerat viverra, tellus justo malesuada augue, a varius eros odio iaculis ex. Aenean placerat tellus odio, sit amet rhoncus odio interdum a. Phasellus nec ultricies nisi, et commodo metus. In sit amet tristique lacus. Fusce sit amet magna vitae turpis efficitur consectetur. Nulla egestas mattis ex id egestas. Donec hendrerit euismod velit, non varius ante viverra eget. Duis nunc nisi, tincidunt in venenatis id, lacinia nec est. Donec mattis aliquet consequat. Vestibulum vel ligula eros. Nam convallis pretium mauris, nec sollicitudin quam fringilla vitae. Curabitur eget enim a est pulvinar finibus ac quis lacus. Phasellus lobortis magna lacus. Suspendisse pellentesque elit et molestie eleifend. Etiam efficitur, dolor non maximus rutrum, ligula purus maximus ligula, nec sodales arcu tellus sed arcu.",
    );
    expect(response.sources).toEqual([
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc2",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc3",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc4",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc5",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc6",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc7",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc8",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc9",
      },
      {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        url: "https://example.com/doc10",
      },
    ]);
  });
});
