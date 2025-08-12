const getInitials = string => {
    const [name, surname] = string.split(' ').filter(item => item !== '');
    return `${name[0].toUpperCase()}.${surname[0].toUpperCase()}.`;
};

const createSlug = string => string.toLowerCase().trim();

const average = arr => {
    const sum = arr.reduce((acc, num) => {
        if (isNaN(num)) throw new Error(`Sono consentiti solo numeri`);
        return acc += num;
    }, 0);
    return sum / arr.length;
};

module.exports = { getInitials, createSlug, average };