export default function cleanString(string: string) {
  const cleanedString = string
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .trim();
  return cleanedString;
}
