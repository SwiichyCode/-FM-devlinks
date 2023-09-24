export default function capitalizeFirstLetterOfEachWord(inputString: string) {
  if (!inputString) return "";

  const words = inputString.toLowerCase().split(" ");

  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const outputString = capitalizedWords.join(" ");

  return outputString;
}
