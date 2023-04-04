import {countLetterA} from '../a_taht';
describe('countLetterA', () => {
    it('should return 0 if no a', () => {
        expect(countLetterA('')).toBe(0);
        expect(countLetterA('b')).toBe(0);
        expect(countLetterA('bb')).toBe(0);
    });
    it('should return 1 if one a', () => {
        expect(countLetterA('a')).toBe(1);
        expect(countLetterA('ba')).toBe(1);
        expect(countLetterA('ab')).toBe(1);
        expect(countLetterA('A')).toBe(1);
        expect(countLetterA('bA')).toBe(1);
        expect(countLetterA('Ab')).toBe(1);
    });
    it('should return 2 if two a', () => {
        expect(countLetterA('aa')).toBe(2);
        expect(countLetterA('baa')).toBe(2);
        expect(countLetterA('aab')).toBe(2);
        expect(countLetterA('AA')).toBe(2);
        expect(countLetterA('bAA')).toBe(2);
        expect(countLetterA('AAb')).toBe(2);
    });
    it('should return 3 if three a', () => {
        expect(countLetterA('aaa')).toBe(3);
        expect(countLetterA('baaa')).toBe(3);
        expect(countLetterA('aaab')).toBe(3);
        expect(countLetterA('AAA')).toBe(3);
        expect(countLetterA('bAAA')).toBe(3);
        expect(countLetterA('AAAb')).toBe(3);
    });
});