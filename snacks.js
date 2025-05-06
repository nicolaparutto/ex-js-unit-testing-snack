// 🏆 Snack 1:
const getInitials = (completeName) => {
	const nameSplitted = completeName.split(" ")
	const initials = nameSplitted.map(word => `${word.charAt(0)}`)
	const initialsJoined = initials.join(",")
	return initialsJoined
}

// 🏆 Snack 2:
const createSlug = (stringa) => {
	return stringa.toLowerCase()
}

// 🏆 Snack 3:
const average = (array) => {
	const arraSum = array.reduce((acc, curr) => {
		return acc + curr
	}, 0)
	return arraSum / array.length
}

// 🏆 Snack 4:
const secondCreateSlug = (frase) => {
	return frase.split(" ").join("-").toLowerCase()
}

// 🏆 Snack 5:
const isPalindrome = (word) => {
	return word.split("").reverse().join("")
}

// 🏆 Snack 6:
const thirdCreateSlug = (title) => {
	if (title.length === 0) {
		throw new Error("Titolo non valido");
	} else {
		return title.split(" ").join("-").toLowerCase()
	}
}

// 🏆 Snack 7:
const posts = [
	{ id: 1, title: "Alimenti", slug: "frutta, pesce, pollo" },
	{ id: 2, title: "Hobby", slug: "pescare, mangiare, cantare" },
	{ id: 3, title: "Sport", slug: "calcio, nuoto, tennis" }
]
const findPostById = (id) => {
	const post = posts.find(post => post.id === id)
	return post
}

module.exports = {
	getInitials,
	createSlug,
	average,
	secondCreateSlug,
	isPalindrome,
	thirdCreateSlug,
	findPostById
}