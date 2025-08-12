const {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
} = require('./snacks');

// Snack 1
test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Francesco Palazzo')).toBe('F.P.');
    expect(getInitials('Daniele  Consoli')).toBe('D.C.');
    expect(getInitials('simone aureliano')).toBe('S.A.');
});

// Snack 3
describe("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    test(`Con parametri validi`, () => {
        expect(average([1, 2, 3, 4, 5])).toBe(3);
        expect(average([5, 5, 5, 5, -5])).toBe(3);
        expect(average([11, 22, 33, 44, 55])).toBe(33);
        expect(average([5, 10, 15])).toBe(10);
    });
    test(`Con parametri non validi`, () => {
        expect(() => average(['hello', 5, 'world'])).toThrow();
    });
});

// Snack 5
test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome('Anna')).toBeTruthy();
    expect(isPalindrome(' A n na')).toBeTruthy();
    expect(isPalindrome('Gianni')).toBeFalsy();
    expect(isPalindrome('Ingegni')).toBeTruthy();
    expect('I topi non avevano nipoti').toBeTruthy();
    expect(isPalindrome('Avido')).toBeFalsy();
})

// Snack 2, 4, 6
describe(`Test della funzione createSlug che dovrebbe restituire dei slug data una stringa e lanciare errori nel caso non siano stringhe`, () => {
    // Snack 2
    describe("La funzione createSlug restituisce una stringa in lowercase.", () => {
        test(`Con singole e semplici parole`, () => {
            expect(createSlug('Express')).toBe('express');
            expect(createSlug('NodeJS')).toBe('nodejs');
        });
        test(`Con spazi casuali ad inizio e fine`, () => {
            expect(createSlug('  MySql ')).toBe('mysql');
        });
    });
    // Snack 4
    describe("La funzione createSlug sostituisce gli spazi con -.", () => {
        test(`Con stringhe di vari tipi`, () => {
            expect(createSlug('Hello World')).toBe('hello-world');
            expect(createSlug('Francesco Palazzo')).toBe('francesco-palazzo');
            expect(createSlug('Cyberpunk 2077')).toBe('cyberpunk-2077');
            expect(createSlug('  CIAO   mONDO')).toBe('ciao-mondo');
        });
    });
    // Snack 6
    describe("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        test(`Gli passo valoti diversi da stringhe`, () => {
            expect(() => createSlug('')).toThrow();
            expect(() => createSlug(null)).toThrow();
            expect(() => createSlug(8)).toThrow();
            expect(() => createSlug(['ciao', 'mondo'])).toThrow();
            expect(() => createSlug({})).toThrow();
        });
    });
});


const posts = ['Cyberpunk 2077', 'Outer Wilds', 'Mass Effect 2']
    .map((g, i) => ({ id: i + 1, title: g, slug: createSlug(g) }));

// Snack 7
describe("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => {
    describe(`Gli passo un array e un numero`, () => {
        test(`restituiscono un post`, () => {
            expect(findPostById(posts, 3)).toEqual({
                id: 3,
                title: 'Mass Effect 2',
                slug: createSlug('Mass Effect 2')
            });
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
        });
        test(`Lanciano un errore`, () => {
            expect(() => findPostById([], 1)).toThrow();
            expect(() => findPostById(posts, 0)).toThrow();
            expect(() => findPostById(posts, 10)).toThrow();
        });
    });
    describe(`Gli passo qualcosa di diverso da un array oda un numero`, () => {
        test(`Non gli passo un array`, () => {
            expect(() => findPostById(posts[0], 2)).toThrow();
            expect(() => findPostById('ciao', 2)).toThrow();
            expect(() => findPostById(7, 2)).toThrow();
            expect(() => findPostById(null, 2)).toThrow();
        });
        test(`Non gli passo un numero`, () => {
            expect(() => findPostById(posts, 'ciao')).toThrow();
            expect(() => findPostById(posts, posts)).toThrow();
            expect(() => findPostById(posts, posts[0])).toThrow();
            expect(() => findPostById(posts, null)).toThrow();
        });
    });
});