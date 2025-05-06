const { getInitials, createSlug, average, secondCreateSlug, isPalindrome } = require("./snacks")

// 🏆 Snack 1:
test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
	expect(getInitials("Luca Rossi")).toBe("L,R")
})

// 🏆 Snack 2:
test('La funzione createSlug restituisce una stringa in lowercase.', () => {
	expect(createSlug("STRINGA")).toBe("stringa")
})

// 🏆 Snack 3:
test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
	expect(average([2, 4, 6, 8])).toBe(5)
})

// 🏆 Snack 4:
test('La funzione secondCsreateSlug sostituisce gli spazi con -.', () => {
	expect(secondCreateSlug("sostituisci gli spazi")).toBe("sostituisci-gli-spazi")
})

// 🏆 Snack 5:
test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
	expect(isPalindrome("radar")).toBe("radar")
})

// 🏆 Snack 6:
// 🏆 Snack 7: