import { BaseRenderer } from "./BaseRenderer";

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {

    const prefix = "=".repeat(level);
    return `${prefix} ${text} ${prefix}`;
  }

  renderParagraph(text: string): string {
    return text; 
  }

  renderList(items: string[]): string {
    return items.map(item => `- ${item}`).join("\n");
  }

  wrapDocument(content: string): string {
    return content; 
  }
}
