import { selectOptions } from "lib/rfebm-parser/parser/selectOptions";

const CATEGORY_SELECTOR = "#categorias";

export function categoryParser(document) {
  const categories = selectOptions(document, CATEGORY_SELECTOR);
  return categories;
}
