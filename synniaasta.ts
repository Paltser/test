function getBirthYearFromIdNumber(idNumber: string): number {
    const yearDigits = idNumber.substr(1, 2);
    let year = parseInt(yearDigits);
    const currentYear = new Date().getFullYear() % 100;

    if (year > currentYear) {
        year += 1900;
    } else {
        year += 2000;
    }

    return year;
}
