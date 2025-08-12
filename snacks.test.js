const { title } = require('process');
const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require('./snacks')

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

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('Anna')).toBeTruthy();
    expect(isPalindrome(' A n na')).toBeTruthy();
    expect(isPalindrome('Gianni')).toBeFalsy();
    expect(isPalindrome('Ingegni')).toBeTruthy();
    expect('I topi non avevano nipoti').toBeTruthy();
    expect(isPalindrome('Avido')).toBeFalsy();
})

// Snack 6
test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug('')).toThrow();
    expect(() => createSlug(null)).toThrow();
    expect(() => createSlug(8)).toThrow();
    expect(() => createSlug(['ciao', 'mondo'])).toThrow();
    expect(() => createSlug({})).toThrow();
})

const posts = [
    {
        id: 1,
        title: 'Cyberpunk 2077',
        slug: createSlug('Cyberpunk 2077')
    },
    {
        id: 2,
        title: 'Outer Wilds',
        slug: createSlug('Outer Wilds')
    },
    {
        id: 3,
        title: 'Mass Effect 2',
        slug: createSlug('Mass Effect 2')
    }
]

// Snack 7
test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
    expect(findPostById(posts, 2)).toEqual({
        id: 2,
        title: 'Outer Wilds',
        slug: createSlug('Outer Wilds')
    });
    expect(findPostById(posts, 1)).toEqual({
        id: 1,
        title: 'Cyberpunk 2077',
        slug: createSlug('Cyberpunk 2077')
    });
    expect(() => findPostById(posts, 10)).toThrow();
    expect(() => findPostById(posts, 'ciao')).toThrow();
    expect(() => findPostById(posts[0], 2)).toThrow();
    expect(() => findPostById('ciao', 2)).toThrow();
})