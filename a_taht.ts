export function countLetterA(sentence: string): number {
    return (sentence.match(/a/gi) || []).length;
}