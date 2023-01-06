import { selectOptions } from "lib/rfebm-parser/parser/selectOptions";

const SUBFEDERATIONS_SELECTOR = "#provincial";

export function subfederationsParser(document) {
  const url = document
    .querySelector("#cabecera > div:nth-child(2) > a:nth-child(1)")
    .getAttribute("href");
  const imgSrc = document
    .querySelector("#cabecera > div:nth-child(2) > a:nth-child(1) > img")
    .getAttribute("src");

  const subfederations = selectOptions(document, SUBFEDERATIONS_SELECTOR);

  return {
    url,
    imgSrc,
    subfederations,
  };
}
