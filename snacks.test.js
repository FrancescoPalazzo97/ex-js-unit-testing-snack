const { getInitials, createSlug } = require('./snacks')

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Francesco Palazzo')).toBe('F.P.');
    expect(getInitials('Daniele  Consoli')).toBe('D.C.');
    expect(getInitials('simone aureliano')).toBe('S.A.');
});

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('Express')).toBe('express');
    expect(createSlug('NodeJS')).toBe('nodejs');
    expect(createSlug('  MySql ')).toBe('mysql');
})