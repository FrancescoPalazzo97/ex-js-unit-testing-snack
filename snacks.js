const getInitials = string => {
    const [name, surname] = string.split(' ').filter(item => item !== '');
    return `${name[0].toUpperCase()}.${surname[0].toUpperCase()}.`;
};

const createSlug = string => string.toLowerCase();

module.exports = { getInitials, createSlug };