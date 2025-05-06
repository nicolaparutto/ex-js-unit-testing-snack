const { getInitials, createSlug, average, secondCreateSlug, isPalindrome, thirdCreateSlug, findPostById } = require("./snacks")

describe('Test sulle stringhe', () => {
	// 🏆 Snack 1:
	test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
		expect(getInitials("Luca Rossi")).toBe("L,R")
	})

	// 🏆 Snack 2:
	test('La funzione createSlug restituisce una stringa in lowercase.', () => {
		expect(createSlug("STRINGA")).toBe("stringa")
	})

	// 🏆 Snack 4:
	test('La funzione secondCreateSlug sostituisce gli spazi con -.', () => {
		expect(secondCreateSlug("Sostituisci gli spazi")).toBe("sostituisci-gli-spazi")
	})

	// 🏆 Snack 5:
	test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
		expect(isPalindrome("radar")).toBe("radar")
	})

	// 🏆 Snack 6:
	test('La funzione thirdCreateSlug lancia un errore se il titolo è vuoto o non valido.', () => {
		expect(() => thirdCreateSlug("")).toThrow()
	})
})

describe('Test su conteggi numerici', () => {
	// 🏆 Snack 3:
	test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
		expect(average([2, 4, 6, 8])).toBe(5)
	})
})

describe('Test su validazione oggetti', () => {
	// 🏆 Snack 7:
	test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
		expect(findPostById(2))
			.toEqual(
				{
					id: 2,
					title: "Hobby",
					slug: "pescare, mangiare, cantare"
				}
			)
	})
})