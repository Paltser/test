import { countVowels } from '../taishaalikud';

describe('countVowels', () => {
    it('should return 0 if no vowels', () => {
        expect(countVowels('')).toBe(0);
        expect(countVowels('bcdfghjklmnpqrstvwxyz')).toBe(0);
    });

    it('should return the correct count for one vowel', () => {
        expect(countVowels('a')).toBe(1);
        expect(countVowels('e')).toBe(1);
        expect(countVowels('i')).toBe(1);
        expect(countVowels('o')).toBe(1);
        expect(countVowels('u')).toBe(1);
        expect(countVowels('A')).toBe(1);
        expect(countVowels('E')).toBe(1);
        expect(countVowels('I')).toBe(1);
        expect(countVowels('O')).toBe(1);
        expect(countVowels('U')).toBe(1);
    });

    it('should return the correct count for multiple vowels', () => {
        expect(countVowels('aeiou')).toBe(5);
        expect(countVowels('AEIOU')).toBe(5);
        expect(countVowels('hello world')).toBe(3);
        expect(countVowels('The quick brown fox jumps over the lazy dog')).toBe(11);
    });
});
