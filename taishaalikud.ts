export function countVowels(sentence: string): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}