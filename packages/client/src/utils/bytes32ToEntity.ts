export const bytes32ToEntity = (bytes32?: string) => {
  if (!bytes32) return "0x00";
  // Remove "0x" from the input string
  const hex = bytes32.replace(/^0x/, "");

  // Find the index of the first non-zero character
  let index = 0;
  while (hex[index] === "0") {
    index++;
  }

  // Get the substring from the first non-zero character
  const result = hex.substring(index);

  // If the result has only one character, prepend a '0' to it
  if (result.length === 1) {
    return "0x0" + result;
  }

  // Otherwise, return the result with '0x' prefix
  return "0x" + result;
};
