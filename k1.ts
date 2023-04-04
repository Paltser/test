export class Isikukood {
    constructor(protected kood: string) {}
    sugu() {
        return parseInt(this.kood[0]) % 2 == 0 ? "N" : "M";
    }
    getBirthYear(): string {
        // Get the last two digits of the birth year
        const birthYear = parseInt(this.kood.substr(1, 2));

        // Check if the birth year is in the 2000s or earlier
        const yearPrefix = birthYear >= 0 && birthYear <= 21 ? "20" : "19";

        // Combine the birth year with the year prefix and parse it to a string
        const fullYear = yearPrefix + birthYear.toString();

        return fullYear;
    }
}