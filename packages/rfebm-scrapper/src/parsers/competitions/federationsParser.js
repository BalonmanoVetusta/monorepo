import { selectOptions } from "../../parser/selectOptions.js";

const FEDERATIONS_SELECTOR = "#territorial";

export function federationsParser(document) {
  return selectOptions(document, FEDERATIONS_SELECTOR);
}
