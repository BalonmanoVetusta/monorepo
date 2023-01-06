import { parseHTML } from "linkedom";
import { HTMLDocument } from "linkedom/types/html/document";

export function getHtmlJSDOM(htmlInput: string | HTMLDocument): Window & typeof globalThis {
  const parser = parseHTML(htmlInput);

  return parser;
}
