import { parseHTML } from "linkedom";
import { HTMLDocument } from "linkedom/types/html/document";

type Window = any;

export function getHtmlJSDOM(htmlInput: string | HTMLDocument): Window & typeof globalThis {
  const parser = parseHTML(htmlInput);

  return parser;
}
