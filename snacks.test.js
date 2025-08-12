const { getInitials, createSlug, average } = require('./snacks')

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Francesco Palazzo')).toBe('F.P.');
    expect(getInitials('Daniele  Consoli')).toBe('D.C.');
    expect(getInitials('simone aureliano')).toBe('S.A.');
});

// Snack 2
test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('Express')).toBe('express');
    expect(createSlug('NodeJS')).toBe('nodejs');
    expect(createSlug('  MySql ')).toBe('mysql');
});

// Snack 3
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([5, 5, 5, 5, -5])).toBe(3);
    expect(average([11, 22, 33, 44, 55])).toBe(33);
    expect(average([5, 10, 15])).toBe(10);
    expect(() => average(['hello', 5, 'world'])).toThrow();
});

// Snack 4
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug('Hello World')).toBe('hello-world');
    expect(createSlug('Francesco Palazzo')).toBe('francesco-palazzo');
    expect(createSlug('Cyberpunk 2077')).toBe('cyberpunk-2077');
    expect(createSlug('  CIAO   mONDO')).toBe('ciao-mondo');
})