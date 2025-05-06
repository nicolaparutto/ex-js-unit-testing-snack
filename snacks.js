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
	return frase.split(" ").join("-")
}

// 🏆 Snack 5:
const isPalindrome = (word) => {
	return word.split("").reverse().join("")
}

// 🏆 Snack 6:
// 🏆 Snack 7:
// 🏆 Snack 8:


module.exports = {
	getInitials,
	createSlug,
	average,
	secondCreateSlug,
	isPalindrome
}