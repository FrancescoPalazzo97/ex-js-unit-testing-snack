const getInitials = string => {
    const [name, surname] = string.split(' ');
    return `${name[0]}.${surname[0]}.`;
};

module.exports = { getInitials };