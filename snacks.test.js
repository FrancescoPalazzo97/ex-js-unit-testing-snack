const { getInitials } = require('./snacks')

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Francesco Palazzo')).toBe('F.P.');
    expect(getInitials('Daniele Consoli')).toBe('D.C.');
});