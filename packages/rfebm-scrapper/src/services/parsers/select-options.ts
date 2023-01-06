export declare type SelectOptionsValue = { id: number; label: string };
export declare type SelectOptions = { [key: string]: SelectOptionsValue };

// This parse a select input element to get label and value
export function selectOptions(
  document: Document,
  querySelector: string
): SelectOptions {
  const { options } = document.querySelector(
    querySelector
  ) as HTMLSelectElement;

  const optionsArray = Array.from(options);
  const mappedOptions = optionsArray.map((option: HTMLOptionElement) => [
    option.value.toString(),
    {
      id: Number(option.value),
      label: option.textContent,
    } as SelectOptionsValue,
  ]);

  // console.log(mappedOptions);
  // [
  //   [ "33", {
  //       id: 33,
  //       label: "text..."
  //     } ], [ "36", {
  //       id: 36
  //       label: "text..."
  //     } ], [
  //     "35", {
  //       id: 35,
  //       label: "text..."
  //     }
  //   ]
  // ]

  return Object.fromEntries(mappedOptions);
}
