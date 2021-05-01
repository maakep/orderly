export function toTitleCase(sentence: string) {
  return sentence.split(' ').map((w) => w[0].toUpperCase() + w.slice(1));
}
