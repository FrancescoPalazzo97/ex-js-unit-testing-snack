// Snack 1
const getInitials = string => {
    const [name, surname] = string.split(' ').filter(item => item !== '');
    return `${name[0].toUpperCase()}.${surname[0].toUpperCase()}.`;
};

// Snack 2 e 4
const createSlug = string => {
    if (!string) throw new Error('Errore: Stringa vuota');
    if (Array.isArray(string)) throw new Error('Errore: Non può essere un array');
    if (typeof string === 'object') throw new Error('Errore: Non può essere un object');
    if (!isNaN(string)) throw new Error('Errore: Non può essere un numero');
    return string
        .split(' ')
        .filter(item => item !== '')
        .map(w => w.toLowerCase())
        .join('-');
};

// Snack 3
const average = arr => {
    const sum = arr.reduce((acc, num) => {
        if (isNaN(num)) throw new Error(`Sono consentiti solo numeri`);
        return acc += num;
    }, 0);
    return sum / arr.length;
};

//Snack 5
const isPalindrome = string => {
    const stringWithoutSpaces = string.replaceAll(' ', '').toLowerCase();
    return stringWithoutSpaces === stringWithoutSpaces.split('').reverse().join('');
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
};