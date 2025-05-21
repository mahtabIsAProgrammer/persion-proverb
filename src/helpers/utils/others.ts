import { slice } from "lodash";

export const slicedTextHandler = (text: string) => {
  const slicedText = slice(text, 0, 36);
  return text?.length >= 36 ? slicedText : text;
};

export const arrayToCustomString = (
  array: (string | number)[] | undefined,
  separator: string
): string => (array ? array.join(separator) : "");
